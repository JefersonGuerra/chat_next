import { InputHTMLAttributes } from "react"

export const ButtonSend = ({ label, className, ...props }: Props) => {
    return (
        <label className={`${className ?? ''} bg-send bg-cover`}>
            <input hidden {...props} readOnly value={label && label} />
        </label>
    )
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
}