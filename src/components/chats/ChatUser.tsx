import Image from "next/image";
import imgPlaceholder from "../../assets/img/image-placeholder.png";
import { DOMAttributes, useEffect, useState } from "react"
import listContact from "@/actions/listContact";
import { getSession } from '@/actions/session';

export default function ChatUser({ ...props }: Props) {

    const [resultList, setResultList] = useState<any>();

    async function getListContact() {
        const user: any = await getSession();
        const listContactData = await listContact(user?.userResult.id);
        setResultList(listContactData);
    }

    useEffect(() => {
        getListContact()
    }, [])

    return (
        resultList?.map((item: any) => {
            return (
                <div key={item.id} {...props} className="w-full flex items-center hover:bg-color_9">
                    <div className="w-[50px] h-[50px] flex justify-center items-center float-left rounded-[150px] overflow-hidden ml-[20px] my-[10px]">
                        {item.image ?
                            <img src={item.image} alt="" className="w-full h-full" />
                            :
                            <Image src={imgPlaceholder} alt="" width={50} height={50} />
                        }
                    </div>
                    <div className="w-[calc(100%-90px)] h-[70px] flex justify-between items-center ml-[20px] border-t-[1px] border-color_4">
                        <p className="text-white text-[15px] font-[montserratmedium]">{item.name}</p>
                    </div>
                </div>
            )
        })
    )
}

interface Props extends DOMAttributes<HTMLDivElement> {

}