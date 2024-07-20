'use client'
import Image from "next/image";
import imgPlaceholder from "../../assets/img/image-placeholder.png"
import { ButtonDefault } from "../inputs/ButtonDefault"
import { logout } from "@/actions/session";
import { useContactStore } from "@/store/contactStore"

export default function ChatMenuUser() {

    const contact = useContactStore();

    return (
        <div className="w-full flex justify-between items-center bg-color_9 relative z-[2]">
            <div className="flex items-center">
                <div className="w-[50px] h-[50px] float-left rounded-[150px] overflow-hidden ml-[20px] my-[10px]">
                    {contact.contact?.image ?
                        <img src={contact.contact?.image} alt="" className="w-full h-full" />
                        :
                        <Image src={imgPlaceholder} alt="" width={50} height={50} />
                    }
                </div>
                <div className="float-left ml-[20px]">
                    <p className="text-[16px] font-[montserratsemibold] text-white float-left">{contact.contact?.name}</p>
                </div>
            </div>
            <ButtonDefault label="Logout" className="w-[70px] mr-[20px]" onClick={() => logout()} />
        </div>
    )
}