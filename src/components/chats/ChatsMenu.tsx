import ChatUser from "./ChatUser"

export default function ChatsMenu() {
    return (
        <div className="w-[510px] h-[100vh] fixed top-0 left-0 bg-color_8">
            <div className="w-full float-left py-[20px]">
                <p className="float-left text-[20px] text-white font-[montserratsemibold] ml-[20px]">Chats</p>
            </div>
            <ChatUser />
        </div>
    )
}
