import { InputHTMLAttributes } from "react"

export const TextInput = ({ label, errorValidations, className, reference, ...props }: Props) => {
    return (
        <label>
            <p className="w-full float-left text-[14px] text-color_3 font-[montserratsemibold] mb-[5px]">{label}</p>
            <input ref={reference} className={`${className ?? ''} w-full h-[35px] border-[2px] border-color_2 rounded-[6px] pl-[11px] text-[14px] text-color_3 font-[montserratlight] placeholder:text-color_2`} {...props} ></input>
            {errorValidations ?
                <p className="w-full float-left text-[14px] text-color_7 font-[montserratlight] mt-1">{errorValidations}</p>
                : ''
            }
        </label>
    )
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    errorValidations?: String
    reference?: any
}