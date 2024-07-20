export default function MessageReceived({ message }: Props) {
    return (
        <div className="w-full float-left px-[20px] mb-[5px]">
            <div className="min-w-[70px] min-h-[35px] max-w-[426px] float-left bg-color_9 p-[10px] rounded-[10px]">
                <p className="w-full text-[14px] text-white font-[montserratregular]">{message?.message}</p>
                <p className="w-full text-[12px] text-color_2 text-right font-[montserratlight]">{message?.time}</p>
            </div>
        </div>
    )
}

type Props = {
    message: any
}