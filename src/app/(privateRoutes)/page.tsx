'use client'
import ChatsMenu from "@/components/chats/ChatsMenu"
import SearchContacts from "@/components/chats/SearchContacts"
import { ButtonSend } from "@/components/inputs/ButtonSend"
import TextAreaMessage from "@/components/inputs/TextAreaMessage"
import MessageSend from "@/components/chats/MessageSend";
import MessageReceived from "@/components/chats/MessageReceived"
import ChatMenuUser from "@/components/chats/ChatMenuUser"

export default function Chat() {

  return (
    <main className="w-full flex justify-center bg-color_13">
      <div className="w-full max-w-[1700px] float-left bg-color_12 relative overflow-hidden">
        <ChatsMenu />
        <SearchContacts />
        <div className="w-[calc(100%-510px)] h-[100vh] float-right relative">
          <div className="w-full h-full absolute top-0 left-0 z-[1] bg-defaultBackground bg-repeat opacity-[0.06]"></div>
          <ChatMenuUser />
          <div className="w-full h-[calc(100%-162px)] float-left pt-[20px] relative z-[2] overflow-y-auto">
            <MessageSend />
            <MessageReceived />
          </div>
          <div className="w-full flex items-center justify-center bg-color_9 py-[20px] absolute bottom-0 z-[2]">
            <TextAreaMessage placeholder={"Digite uma mensagem"} />
            <ButtonSend className="w-[40px] h-[40px] ml-[20px]" />
          </div>
        </div>
      </div>
    </main>
  )
}
