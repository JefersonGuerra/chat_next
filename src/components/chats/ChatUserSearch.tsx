import { DOMAttributes } from "react"
import Image from "next/image";
import imgPlaceholder from "../../assets/img/image-placeholder.png";
import { getSession } from '@/actions/session';
import { sendInviteContact } from "@/actions/sendInviteContact";

export default function ChatUserSearch({ id_user_recipient, nameUser, imageUser, status_sender, status_recipient, ...props }: Props) {

    async function handleSendInviteContact(id_user_recipient: number) {

        console.log(status_sender)
        console.log(status_recipient)

        // const session: any = await getSession();
        // sendInviteContact(id_user_recipient, session.userResult.id)

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
                    !status_sender && status_sender !== undefined ?
                        <div className="w-[100px]">
                            <button className="w-[50px] h-[25px] float-left bg-red-600" onClick={() => handleSendInviteContact(id_user_recipient)}></button>
                            <button className="w-[50px] h-[25px] float-left bg-green-600" onClick={() => handleSendInviteContact(id_user_recipient)}></button>
                        </div>
                        : !status_recipient && status_recipient !== undefined ?
                            <button className="w-[100px] h-[25px] float-left bg-gray-600" onClick={() => handleSendInviteContact(id_user_recipient)}></button>
                            : status_sender || status_recipient ?
                                <button className="w-[100px] h-[25px] float-left bg-blue-600" onClick={() => handleSendInviteContact(id_user_recipient)}></button>
                                :
                                <button className="w-[100px] h-[25px] float-left bg-orange-600" onClick={() => handleSendInviteContact(id_user_recipient)}></button>
                }

            </div>
        </div>
    )
}

interface Props extends DOMAttributes<HTMLDivElement> {
    nameUser?: string,
    imageUser?: string,
    id_user_recipient: number,
    status_sender: boolean | undefined,
    status_recipient: boolean | undefined
}