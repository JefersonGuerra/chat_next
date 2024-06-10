import { TextInput } from "@/components/inputs/TextInput"
import { ButtonDefault } from "@/components/inputs/ButtonDefault"
import Link from "next/link"


export default function Login() {
  return (
    <div className="w-full h-[100vh] float-left flex items-center justify-center flex-wrap">
      <div className="w-[316px] float-left">
        <form>
          <div className="w-full h-[50px] float-left bg-logo bg-no-repeat bg-center bg-[length:187px] mb-[40px]"></div>
          <div className="w-full float-left flex flex-col space-y-[27px]">
            <TextInput label="Login" type="text" name="email" placeholder="E-mail" required />
            <TextInput label="Senha" type="password" name="password" placeholder="Senha" required />
          </div>
          <Link href={'/recuperar-senha'} className={'w-full float-left text-[12px] text-color_3 text-right font-[montserratsemibold] mt-[10px]'} >Esqueceu a senha?</Link>
          <div className="w-full float-left flex justify-center mt-[48px]">
            <ButtonDefault type={"submit"} label="ENTRAR" />
          </div>
        </form>
      </div>
    </div>
  )
}
