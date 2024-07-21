export default function MessageSend({ message }: Props) {
    return (
        <div className="w-full flex justify-end px-[20px] mb-[5px]">
            <div className="min-w-[70px] min-h-[35px] max-w-[426px] float-left bg-color_11 p-[10px] rounded-[10px]">
                <p className="w-full text-[14px] text-white font-[montserratregular]">{message?.text}</p>
                <p className="w-full text-[12px] text-color_2 text-right font-[montserratlight]">{message?.createdAt}</p>
            </div>
        </div>
    )
}
type Props = {
    message: any
}