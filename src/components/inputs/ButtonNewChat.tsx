'use client'
import { InputHTMLAttributes } from "react"

export default function ButtonNewChat({ label, className, ...props }: Props) {
    return (
        <label className={`${className ?? ''} bg-newChat bg-cover cursor-pointer`}>
            <input hidden {...props} readOnly value={label && label} />
        </label>
    )
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
}