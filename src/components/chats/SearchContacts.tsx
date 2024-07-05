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
    const [query, setQuery] = useState<string>('');

    function closeContactsSearchBar() {
        const SearchContacts = window.document.getElementById("SearchContacts");
        SearchContacts?.setAttribute("style", "left: -510px; transition-duration: 0.3s;");
    }

    async function onChangeSearchBar(event: string) {
        setQuery(event)
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
                <Suspense fallback={<p className="w-full float-left text-color_6 text-[20px]">Loading feed...</p>}>
                    <ChatUserSearch dataUser={listUserContact} sessionId={session?.userResult.id} query={query} />
                </Suspense>
            </div>
        </div>
    )
}