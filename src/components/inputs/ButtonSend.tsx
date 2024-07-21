import { InputHTMLAttributes } from "react"

export const ButtonSend = ({ label, ...props }: Props) => {
    return (
        <label className={`w-[40px] h-[40px] ml-[20px] bg-send bg-cover cursor-pointer`}>
            <input hidden {...props} readOnly value={label && label} />
        </label>
    )
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
}