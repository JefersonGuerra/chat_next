import { TextInput } from "@/components/inputs/TextInput"
import { ButtonDefault } from "@/components/inputs/ButtonDefault"
import { FileSelectImageRouded } from "@/components/inputs/FileSelectImageRouded"

export default function SignUp() {
  return (
    <div className="w-full h-[100vh] float-left flex items-center justify-center flex-wrap">
      <div className="w-[316px] float-left">
        <form>
          <div className="w-full float-left flex flex-col space-y-[27px]">
            <div className="w-full flex justify-center items-center">
              <FileSelectImageRouded />
            </div>
            <TextInput label="Nome" type="text" name="name" placeholder="Nome" required />
            <TextInput label="Login" type="text" name="email" placeholder="E-mail" required />
            <TextInput label="Senha" type="password" name="password" placeholder="Senha" required />
            <TextInput label="Repetir Senha" type="password" name="re_password" placeholder="Repetir Senha" required />
          </div>
          <div className="w-full float-left flex justify-center mt-[48px]">
            <ButtonDefault type={"submit"} label="REGISTRAR" />
          </div>
        </form>
      </div>
    </div>
  )
}
