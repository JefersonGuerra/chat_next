import { InputHTMLAttributes } from "react"

export default function LeftArrow({ label, className, ...props }: Props) {
    return (
        <label className={`${className ?? ''} bg-leftArrow bg-cover cursor-pointer`}>
            <input hidden {...props} readOnly value={label && label} />
        </label>
    )
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
}