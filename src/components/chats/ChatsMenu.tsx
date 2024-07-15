import { useEffect, useState } from "react";
import ChatUser from "./ChatUser"
import ButtonNewChat from "../inputs/ButtonNewChat"

export default function ChatsMenu() {

    function openContactsSearchBar() {
        const SearchContacts = window.document.getElementById("SearchContacts");
        SearchContacts?.setAttribute("style", "left: 0; transition-duration: 0.3s;");
    }

    return (
        <div className="w-[510px] h-[100vh] absolute left-0 top-0 bg-color_8">
            <div className="w-full float-left py-[20px]">
                <p className="float-left text-[20px] text-white font-[montserratsemibold] ml-[20px]">Chats</p>
                <ButtonNewChat className="w-[25px] h-[25px] float-right mr-[20px]" onClick={openContactsSearchBar} />
            </div>
            <div className="w-full h-[calc(100vh-70px)] float-left overflow-auto">
                <ChatUser />
            </div>
        </div>
    )
}
