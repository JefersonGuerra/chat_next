'use client'
import { useLayoutEffect, useRef, TextareaHTMLAttributes } from "react";

export default function TextAreaMensage({ className, ...props }: Props) {

    const textbox = useRef<any>(null);

    function adjustHeight() {
        textbox.current.style.height = "inherit";
        textbox.current.style.height = `${textbox.current.scrollHeight}px`;
    }

    useLayoutEffect(adjustHeight, []);

    function handleKeyDown(e: any) {
        adjustHeight();
    }

    return (
        <textarea {...props} ref={textbox} onChange={handleKeyDown} className="w-full text-[14px] font-[montserratregular] text-white outline-none max-w-[960px] min-h-[42px] max-h-[200px] ml-[20px] rounded-[5px] bg-color_10 p-[5px]" />
    )
}

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
}