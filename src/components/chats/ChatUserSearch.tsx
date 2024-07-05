import { DOMAttributes, useEffect, useState } from "react"
import Image from "next/image";
import imgPlaceholder from "../../assets/img/image-placeholder.png";
import { sendInviteContact, aceptInvite, refuseInvite } from "@/actions/inviteContact";
import { Check, UserRoundPlus, X } from "lucide-react";
import searchContactUser from "@/actions/searchContactUser";

export default function ChatUserSearch({ dataUser, sessionId, query }: Props) {

    const [dataUserState, setDataUserState] = useState(dataUser);

    async function updateList() {
        setDataUserState(await searchContactUser(query, sessionId));
    }

    async function handleSendInviteContact(id_user_recipient: number) {
        await sendInviteContact(id_user_recipient, sessionId)
        updateList();
    }

    async function handleAceptInvite(idListInvate: number) {
        await aceptInvite(idListInvate)
        updateList();
    }

    async function handleRefuseInvite(idListInvate: number) {
        await refuseInvite(idListInvate)
        updateList();
    }

    useEffect(() => {
        setDataUserState(dataUser)
    }, [dataUser])


    return (
        dataUserState?.filter((item: any) => item.id !== sessionId).map((item: any) => {
            return (
                <div key={item.public_id} className="w-full flex items-center hover:bg-color_9">
                    <div className="w-[50px] h-[50px] flex justify-center items-center float-left rounded-[150px] overflow-hidden ml-[20px] my-[10px]">
                        {item.image ?
                            <img src={item.image} alt="" className="w-full h-full" />
                            :
                            <Image src={imgPlaceholder} alt="" width={50} height={50} />
                        }
                    </div>
                    <div className="w-[calc(100%-100px)] h-[70px] flex justify-between items-center ml-[20px] border-t-[1px] border-color_4">
                        <p className="text-white text-[15px] font-[montserratmedium]">{item.name}</p>
                        {
                            !item.add_contact_sender[0]?.status && item.add_contact_sender[0]?.status !== undefined ?
                                <div className="w-[60px]">
                                    <X onClick={() => handleRefuseInvite(item.add_contact_sender[0]?.id ?? item.add_contact_recipient[0]?.id)} className="w-[30px] h-[30px] float-left text-[12px] text-color_7 cursor-pointer" />
                                    <Check onClick={() => handleAceptInvite(item.add_contact_sender[0]?.id ?? item.add_contact_recipient[0]?.id)} className="w-[30px] h-[30px] float-left text-color_6 cursor-pointer" />
                                </div>
                                :
                                !item.add_contact_recipient[0]?.status && item.add_contact_recipient[0]?.status !== undefined ?
                                    <div className="">
                                        <p className="text-white text-[15px] font-[montserratmedium]">Solicitação enviada</p>
                                    </div>
                                    :
                                    item.add_contact_sender[0]?.status || item.add_contact_recipient[0]?.status ?
                                        <div className="">
                                            <p className="text-white text-[15px] font-[montserratmedium]">Adicionado</p>
                                        </div>
                                        :
                                        <UserRoundPlus onClick={() => handleSendInviteContact(item.id)} className="w-[30px] h-[30px] float-left text-[12px] text-color_1 cursor-pointer" />
                        }
                    </div>
                </div>
            )
        })
    )
}

interface Props extends DOMAttributes<HTMLDivElement> {
    dataUser: any,
    sessionId: number,
    query: string,
}