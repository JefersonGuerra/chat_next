import Image from "next/image";
import imgPlaceholder from "../../assets/img/image-placeholder.png";

export default function ChatUser() {
    return (
        <div className="w-full flex items-center">
            <div className="w-[50px] h-[50px] float-left rounded-[150px] overflow-hidden ml-[20px] my-[10px]">
                <Image src={imgPlaceholder} alt="" width={50} height={50} />
            </div>
            <div className="w-[calc(100%-90px)] h-[70px] flex justify-between items-center ml-[20px] border-t-[1px] border-color_4">
                <p className="text-white text-[15px] font-[montserratmedium]">Nome Usuario</p>
                <p className="text-white text-[12px] font-[montserratlight] mr-[20px]">02/06/2024</p>
            </div>
        </div>
    )
}
