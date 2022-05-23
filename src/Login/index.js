import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoCenter , Logo , Input , Botao  , Entrar, LinkLogin} from "./style.js";



export default function Login({home , setHome}){
    const [ email , setEmail] = useState("")
    const [ senha , setSenha] = useState("")
    console.log(email)

   
        return (
            <>
            <LogoCenter>
                <Logo src="assets/imgs/logo.png" alt="logo trackit" />
                <Input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type="text" placeholder="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <Botao><Entrar>Entrar</Entrar></Botao>
                <Link to={"/cadastro"}>
                    <LinkLogin onClick={() => setHome(false)}>Não tem uma conta? Cadastre-se!</LinkLogin>
            </Link>
        </LogoCenter>

        </>
    )
   

}