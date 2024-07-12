'use client'
import { useFormState } from "react-dom"
import { TextInput } from "@/components/inputs/TextInput"
import { ButtonDefault } from "@/components/inputs/ButtonDefault"
import Link from "next/link"
import { handleLogin } from '@/actions/session'

const initialState = {
  success: null,
  errorValidations: null,
  loginFailed: undefined,
}

export default function Login() {

  const [state, formAction] = useFormState(handleLogin, initialState)

  return (
    <div className="w-full h-[100vh] float-left flex items-center justify-center flex-wrap">
      <div className="w-[316px] float-left">
        <form action={formAction}>
          <div className="w-full float-left flex flex-col space-y-[27px]">
            <TextInput label="Login" type="text" name="email" placeholder="E-mail" required errorValidations={state.errorValidations?.email ?? state?.loginFailed} />
            <TextInput label="Senha" type="password" name="password" placeholder="Senha" required errorValidations={state.errorValidations?.password} />
          </div>
          <Link href={'/sign-up'} className={'w-full float-left text-[12px] text-color_3 text-right font-[montserratsemibold] mt-[10px]'} >Registrar</Link>
          <div className="w-full float-left flex justify-center mt-[48px]">
            <ButtonDefault type={"submit"} label="ENTRAR" />
          </div>
        </form>
      </div>
    </div>
  )
}
