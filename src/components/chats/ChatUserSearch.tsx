import { DOMAttributes, useState } from "react"
import Image from "next/image";
import imgPlaceholder from "../../assets/img/image-placeholder.png";
import { getSession } from '@/actions/session';
import { sendInviteContact, aceptInvite, refuseInvite } from "@/actions/inviteContact";
import { Check, UserRoundPlus, X } from "lucide-react";

export default function ChatUserSearch({ idListInvate, id_user_recipient, nameUser, imageUser, statusSender, statusRecipient, ...props }: Props) {

    const [sender, setSender] = useState(statusSender);
    const [recipient, setRecipient] = useState(statusRecipient);

    async function handleSendInviteContact(id_user_recipient: number) {
        const session: any = await getSession();
        const statusRequest = await sendInviteContact(id_user_recipient, session.userResult.id)
        if (statusRequest === 201) {
            setRecipient(false)
        }
    }

    async function handleAceptInvite(idListInvate: number) {
        const statusRequest = await aceptInvite(idListInvate)
        if (statusRequest === 200) {
            setSender(true)
            setRecipient(true)
        }
    }

    async function handleRefuseInvite(idListInvate: number) {
        const statusRequest = await refuseInvite(idListInvate)
        if (statusRequest === 200) {
            setSender(undefined)
            setRecipient(undefined)
        }
    }

    return (
        <div {...props} className="w-full flex items-center hover:bg-color_9">
            <div className="w-[50px] h-[50px] flex justify-center items-center float-left rounded-[150px] overflow-hidden ml-[20px] my-[10px]">
                {imageUser ?
                    <img src={imageUser} alt="" className="w-full h-full" />
                    :
                    <Image src={imgPlaceholder} alt="" width={50} height={50} />
                }
            </div>
            <div className="w-[calc(100%-100px)] h-[70px] flex justify-between items-center ml-[20px] border-t-[1px] border-color_4">
                <p className="text-white text-[15px] font-[montserratmedium]">{nameUser}</p>

                {
                    !sender && sender !== undefined ?
                        <div className="w-[60px]">
                            <X onClick={() => handleRefuseInvite(idListInvate)} className="w-[30px] h-[30px] float-left text-[12px] text-color_7 cursor-pointer" />
                            <Check onClick={() => handleAceptInvite(idListInvate)} className="w-[30px] h-[30px] float-left text-color_6 cursor-pointer" />
                        </div>
                        :
                        !recipient && recipient !== undefined ?
                            <div className="">
                                <p className="text-white text-[15px] font-[montserratmedium]">Solicitação enviada</p>
                            </div>
                            :
                            sender || recipient ?
                                <div className="">
                                    <p className="text-white text-[15px] font-[montserratmedium]">Adicionado</p>
                                </div>
                                :
                                <UserRoundPlus onClick={() => handleSendInviteContact(id_user_recipient)} className="w-[30px] h-[30px] float-left text-[12px] text-color_1 cursor-pointer" />
                }

            </div>
        </div>
    )
}

interface Props extends DOMAttributes<HTMLDivElement> {
    nameUser?: string,
    imageUser?: string,
    id_user_recipient: number,
    statusSender: boolean | undefined,
    statusRecipient: boolean | undefined
    idListInvate: number
}