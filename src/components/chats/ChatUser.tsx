import Image from "next/image";
import imgPlaceholder from "../../assets/img/image-placeholder.png";
import { DOMAttributes } from "react"

export default function ChatUser({ nameUser, date, imageUser, ...props }: Props) {
    return (
        <div {...props} className="w-full flex items-center hover:bg-color_9">
            <div className="w-[50px] h-[50px] flex justify-center items-center float-left rounded-[150px] overflow-hidden ml-[20px] my-[10px]">
                {imageUser ?
                    <img src={imageUser} alt="" className="w-full h-full" />
                    :
                    <Image src={imgPlaceholder} alt="" width={50} height={50} />
                }
            </div>
            <div className="w-[calc(100%-90px)] h-[70px] flex justify-between items-center ml-[20px] border-t-[1px] border-color_4">
                <p className="text-white text-[15px] font-[montserratmedium]">{nameUser}</p>
                <p className="text-white text-[12px] font-[montserratlight] mr-[20px]">{date}</p>
            </div>
        </div>
    )
}

interface Props extends DOMAttributes<HTMLDivElement> {
    nameUser?: string,
    date?: string,
    imageUser?: string,
}