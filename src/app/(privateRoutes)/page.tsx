'use client'
import { Fragment, useCallback, useEffect, useState } from "react"
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

export default function Chat() {

  const [receivedMessage, setReceivedMessage] = useState<any>([]);
  const socket = io(`http://localhost:5000`, { autoConnect: false })
  const contact = useContactStore();

  const renderMessage = useCallback((message: object) => {
    setReceivedMessage([...receivedMessage, message]);
  }, [socket])

  async function sendMessage(event: any) {
    event.preventDefault();
    event.currentTarget.checkValidity();
    const message = event.target.message.value;
    const userSession = await getSession();

    if (message.length && userSession.userResult.name) {
      const date = new Date();
      const hour = date.getHours();
      const min = date.getMinutes();
      const fullTime = hour < 10 ? `0${hour}:${min}` : `${hour}:${min}`;

      const messageObject = {
        id: uuidv4(),
        sender: userSession.userResult.id,
        received: contact.contact?.id,
        message: message,
        time: fullTime
      }
      renderMessage(messageObject)
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
      sender: userSession.userResult.id,
      received: contact.contact?.id,
    };

    socket.on('receivedMessage', function (message: object) {
      renderMessage(message)
    })
  }

  useEffect(() => {
    connectionSocket()
    return () => {
      socket.disconnect();
    }
  }, [socket])


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
              <div className="w-full h-[calc(100%-162px)] float-left pt-[20px] relative z-[2] overflow-y-auto">
                {
                  receivedMessage.length > 0 && receivedMessage?.map((item: any) => {
                    return (
                      <Fragment key={item.id}>
                        {contact.contact?.id === item.sender ?
                          <MessageReceived message={item} />
                          :
                          contact.contact?.id === item.received &&
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
