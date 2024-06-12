'use client'
import ChatUser from "./ChatUser"
import LeftArrow from "../inputs/LeftArrow"
import ContactsSearchBar from "../inputs/ContactsSearchBar"

export default function SearchContacts() {


    const closeContactsSearchBar = () => {
        const SearchContacts = window.document.getElementById("SearchContacts");
        SearchContacts?.setAttribute("style", "left: -510px; transition-duration: 0.3s;");
    }

    return (
        <div id="SearchContacts" className="w-[510px] h-[100vh] absolute left-[-510px] top-0 bg-color_8">
            <div className="w-full float-left py-[20px]">
                <div className="w-full float-left">
                    <LeftArrow className="w-[25px] h-[25px] float-left ml-[20px]" onClick={closeContactsSearchBar} />
                    <p className="float-left text-[16px] text-white font-[montserratsemibold] ml-[20px]">Nova Conversa</p>
                </div>
                <div className="w-full float-left px-[20px] mt-[20px]">
                    <ContactsSearchBar placeholder="Pesquisar email" />
                </div>
            </div>
            <div className="w-full h-[calc(100vh-120px)] float-left overflow-auto">
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
                <ChatUser />
            </div>
        </div>
    )
}
