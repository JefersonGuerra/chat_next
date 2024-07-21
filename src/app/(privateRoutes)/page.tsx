'use client'
import { Fragment, useCallback, useEffect, useRef, useState } from "react"
import ChatsMenu from "@/components/chats/ChatsMenu"
import SearchContacts from "@/components/chats/SearchContacts"
import { ButtonSend } from "@/components/inputs/ButtonSend"
import TextAreaMessage from "@/components/inputs/TextAreaMessage"
import MessageSend from "@/components/chats/MessageSend";
import MessageReceived from "@/components/chats/MessageReceived"
import ChatMenuUser from "@/components/chats/ChatMenuUser"
import { useContactStore } from "@/store/contactStore"
import { getSession } from "@/actions/session"
import { io } from "socket.io-client"
import { v4 as uuidv4 } from 'uuid';
import listMessages from "@/actions/listMessages";

export default function Chat() {

  const [receivedMessage, setReceivedMessage] = useState<any>([]);
  const [previousMessage, setPreviousMessage] = useState<any>([]);
  const socket = io(process.env.SOCKET_BASE_URL, { autoConnect: false })
  const contact = useContactStore();

  function time() {
    function pad(s: any) {
      return (s < 10) ? '0' + s : s;
    }
    var date = new Date();
    return [date.getHours(), date.getMinutes()].map(pad).join(':');
  }

  const renderMessage = useCallback((message: object) => {
    setReceivedMessage([...receivedMessage, message]);
  }, [socket])

  async function sendMessage(event: any) {
    event.preventDefault();
    event.currentTarget.checkValidity();
    const message = event.target.message.value;
    event.currentTarget.message.value = '';
    event.currentTarget.message.focus();
    const userSession = await getSession();

    if (message.length > 0 && userSession.userResult.name) {
      const messageObject = {
        id: uuidv4(),
        id_user_sender: userSession.userResult.id,
        id_user_recipient: contact.contact?.id,
        text: message,
        createdAt: time()
      }
      renderMessage(messageObject);
      socket.emit('sendMessage', messageObject);
    }
  }

  async function connectionSocket() {
    const userSession = await getSession();
    socket.connect();
    socket.on('connect', () => {
      console.log(socket.id)
    })

    socket.auth = {
      token: userSession.token,
      room: contact.contact?.room
    };

    socket.on('receivedMessage', function (message: object) {
      renderMessage(message)
    })
  }

  async function listUserMessages(){
    if (contact.contact?.id) {
      const messages = await listMessages(contact.contact?.id);
      setPreviousMessage(messages);
    }
  }

  useEffect(() => {
    connectionSocket();
    const element = document.getElementById('messageContainer');
    element && (element.scrollTop = element.scrollHeight);
    return () => {
      socket.disconnect();
    }
  }, [socket])

  useEffect(() => {
    listUserMessages()
  }, [contact.contact])
  

  return (
    <main className="w-full flex justify-center bg-color_13">
      <div className="w-full max-w-[1700px] float-left bg-color_12 relative overflow-hidden">
        <ChatsMenu />
        <SearchContacts />
        <div className="w-[calc(100%-510px)] h-[100vh] float-right relative">
          {contact.contact ?
            <>
              <div className="w-full h-full absolute top-0 left-0 z-[1] bg-defaultBackground bg-repeat opacity-[0.06]"></div>
              <ChatMenuUser />
              <div id="messageContainer" className="w-full h-[calc(100%-162px)] float-left pt-[20px] relative z-[2] overflow-y-auto">
                {
                  previousMessage.length > 0 && previousMessage?.map((item: any) => {
                    return (
                      <Fragment key={item.id}>
                        {contact.contact?.id === item.id_user_sender ?
                          <MessageReceived message={item} />
                          :
                          contact.contact?.id === item.id_user_recipient &&
                          <MessageSend message={item} />
                        }
                      </Fragment>
                    )
                  })
                }
                {
                  receivedMessage.length > 0 && receivedMessage?.map((item: any) => {
                    return (
                      <Fragment key={item.id}>
                        {contact.contact?.id === item.id_user_sender ?
                          <MessageReceived message={item} />
                          :
                          contact.contact?.id === item.id_user_recipient &&
                          <MessageSend message={item} />
                        }
                      </Fragment>
                    )
                  })
                }
              </div>
              <form onSubmit={sendMessage} className="w-full flex items-center justify-center bg-color_9 py-[20px] absolute bottom-0 z-[2]">
                <TextAreaMessage name="message" placeholder={"Digite uma mensagem"} />
                <ButtonSend type="submit" />
              </form>
            </>
            :
            <div className="w-full h-full flex justify-center items-center">
              <p className="w-full text-[50px] text-white text-center">Bem-vindo</p>
            </div>
          }
        </div>
      </div>
    </main>
  )
}
