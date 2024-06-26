'use client'
import { useFormState } from "react-dom"
import { TextInput } from "@/components/inputs/TextInput"
import { ButtonDefault } from "@/components/inputs/ButtonDefault"
import { FileSelectImageRouded } from "@/components/inputs/FileSelectImageRouded"
import createUser from "@/actions/createUser"

const initialState = {
  success: null,
  errorValidations: []
}

export default function SignUp() {

  const [state, formAction] = useFormState(createUser, initialState)

  const email = state?.errorValidations.filter((item: any) => item.field === 'email').map((item: any) => item.message);
  const image = state?.errorValidations.filter((item: any) => item.field === 'image').map((item: any) => item.message);
  const name = state?.errorValidations.filter((item: any) => item.field === 'name').map((item: any) => item.message);
  const password = state?.errorValidations.filter((item: any) => item.field === 'password').map((item: any) => item.message);
  const re_password = state?.errorValidations.filter((item: any) => item.field === 're_password').map((item: any) => item.message);

  return (
    <div className="w-full h-[100vh] float-left flex items-center justify-center flex-wrap">
      <div className="w-[316px] float-left">
        <form action={formAction}>
          <div className="w-full float-left flex flex-col space-y-[27px]">
            <div className="w-full flex justify-center items-center">
              <FileSelectImageRouded name="image" errorValidations={`${image}`} />
            </div>
            <TextInput label="Nome" type="text" name="name" placeholder="Nome" required errorValidations={`${name}`} />
            <TextInput label="Login" type="text" name="email" placeholder="E-mail" required errorValidations={`${email}`} />
            <TextInput label="Senha" type="password" name="password" placeholder="Senha" required errorValidations={`${password}`} />
            <TextInput label="Repetir Senha" type="password" name="re_password" placeholder="Repetir Senha" required errorValidations={`${re_password}`} />
          </div>
          <div className="w-full float-left flex justify-center mt-[48px]">
            <ButtonDefault type={"submit"} label="REGISTRAR" />
          </div>
        </form>
      </div>
    </div>
  )
}
