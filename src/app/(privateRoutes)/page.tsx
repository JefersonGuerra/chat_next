import ChatsMenu from "@/components/chats/ChatsMenu"
import SearchContacts from "@/components/chats/SearchContacts"
import Image from "next/image";
import imgPlaceholder from "../../assets/img/image-placeholder.png"
import { ButtonSend } from "@/components/inputs/ButtonSend"
import TextAreaMenssage from "@/components/inputs/TextAreaMessage"
import MessageSend from "@/components/chats/MessageSend";
import MessageReceived from "@/components/chats/MessageReceived";

export default function Chat() {
  return (
    <main className="w-full flex justify-center bg-color_13">
      <div className="w-full max-w-[1700px] float-left bg-color_12 relative overflow-hidden">
        <ChatsMenu />
        <SearchContacts />
        <div className="w-[calc(100%-510px)] h-[100vh] float-right relative">
          <div className="w-full h-full absolute top-0 left-0 z-[1] bg-defaultBackground bg-repeat opacity-[0.06]"></div>
          <div className="w-full flex items-center bg-color_9 relative z-[2]">
            <div className="w-[50px] h-[50px] float-left rounded-[150px] overflow-hidden ml-[20px] my-[10px]">
              <Image src={imgPlaceholder} alt="" width={50} height={50} />
            </div>
            <div className="float-left ml-[20px]">
              <p className="text-[16px] font-[montserratsemibold] text-white float-left">Nome Usuario</p>
            </div>
          </div>
          <div className="w-full h-[calc(100%-162px)] float-left pt-[20px] relative z-[2] overflow-y-auto">
            <MessageSend />
            <MessageReceived />
          </div>
          <div className="w-full flex items-center justify-center bg-color_9 py-[20px] absolute bottom-0 z-[2]">
            <TextAreaMenssage placeholder={"Digite uma mensagem"} />
            <ButtonSend className="w-[40px] h-[40px] ml-[20px]" />
          </div>
        </div>
      </div>
    </main>
  )
}
