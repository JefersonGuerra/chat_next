import { InputHTMLAttributes } from "react"

export default function ContactsSearchBar({ className, reference, ...props }: Props) {
    return (
        <label>
            <input ref={reference} className={`${className ?? ''} w-full h-[35px] border-color_2 rounded-[5px] pl-[11px] text-[14px] text-white font-[montserratlight] placeholder:text-color_2 bg-color_10 `} {...props} ></input>
        </label>
    )
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    reference?: any
}