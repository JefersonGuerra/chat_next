'use client'
import { Suspense, useEffect, useState } from "react"
import ChatUserSearch from "./ChatUserSearch"
import LeftArrow from "../inputs/LeftArrow"
import ContactsSearchBar from "../inputs/ContactsSearchBar"
import searchContactUser from "@/actions/searchContactUser"
import { getSession } from '@/actions/session';

export default function SearchContacts() {

    const [listUserContact, setListUserContact] = useState<any>();
    const [session, setSession] = useState<any>();

    function closeContactsSearchBar() {
        const SearchContacts = window.document.getElementById("SearchContacts");
        SearchContacts?.setAttribute("style", "left: -510px; transition-duration: 0.3s;");
    }

    async function onChangeSearchBar(event: string) {
        const resultSearch = await searchContactUser(event, session.userResult.id);
        setListUserContact(resultSearch);
    }

    useEffect(() => {
        getSession().then(session => {
            setSession(session);
        })
    }, [])

    return (
        <div id="SearchContacts" className="w-[510px] h-[100vh] absolute left-[-510px] top-0 bg-color_8">
            <div className="w-full float-left py-[20px]">
                <div className="w-full float-left">
                    <LeftArrow className="w-[25px] h-[25px] float-left ml-[20px]" onClick={closeContactsSearchBar} />
                    <p className="float-left text-[16px] text-white font-[montserratsemibold] ml-[20px]">Nova Conversa</p>
                </div>
                <div className="w-full float-left px-[20px] mt-[20px]">
                    <ContactsSearchBar placeholder="Pesquisar email" onChange={(e) => onChangeSearchBar(e.currentTarget.value)} />
                </div>
            </div>

            <div className="w-full h-[calc(100vh-120px)] float-left overflow-auto">
                <Suspense fallback={<p>Loading feed...</p>}>
                    {
                        listUserContact?.filter((item: any) => item.id !== session.userResult.id).map((item: any) => {
                            return <ChatUserSearch key={item.public_id} idListInvate={item.add_contact_sender[0]?.id ?? item.add_contact_recipient[0]?.id} imageUser={item.image} nameUser={item.name} id_user_recipient={item.id} statusSender={item.add_contact_sender[0]?.status} statusRecipient={item.add_contact_recipient[0]?.status} />
                        })
                    }
                </Suspense>
            </div>
        </div>
    )
}