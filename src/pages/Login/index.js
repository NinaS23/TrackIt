import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

import { ThreeDots } from "react-loader-spinner";
import { LogoCenter, Logo, Input, Botao, Entrar, LinkLogin, Corpo } from "./style.js";
import UsuarioContext from "../../providers/usuarioContext.js";
import ImageContext from "../../providers/imageContext.js";



export default function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [work, setWork] = useState(false)
    const { token, setToken } = useContext(UsuarioContext);
    const { setImg } = useContext(ImageContext)
    const navigate = useNavigate()

    function EnviarUser(e) {
        e.preventDefault();
        setWork(true);
        const object = {
            email,
            password: senha
        }
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }

        }

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", object, config)
        promise.then(response => {
            console.log(response.data)
            setToken(response.data.token)
            setImg(response.data.image)
            navigate('/hoje');
            setWork(false)

        });
        promise.catch((erro) => {
            console.log(erro)
            alert(erro)
        })
    }
    if (work === false) {
        return (
            <>
                <Corpo>
                    <LogoCenter>
                        <Logo src="assets/imgs/logo.png" alt="logo trackit" />
                        <Input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input type="text" placeholder="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        <Botao onClick={EnviarUser}><Entrar>Entrar</Entrar></Botao>
                        <Link to={"/cadastro"}>
                            <LinkLogin>Não tem uma conta? Cadastre-se!</LinkLogin>
                        </Link>
                    </LogoCenter>
                </Corpo>

            </>
        )
    }
    if (work === true) {
        return (
            <>
                <Corpo>
                    <LogoCenter>
                        <Logo src="assets/imgs/logo.png" alt="logo trackit" />
                        <Input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={work} />
                        <Input type="text" placeholder="senha" value={senha} onChange={(e) => setSenha(e.target.value)} disabled={work} />
                        <Botao>
                            <ThreeDots color="#FFFFFF" width={50} />
                        </Botao>
                        <Link to={"/cadastro"}>
                            <LinkLogin>Não tem uma conta? Cadastre-se!</LinkLogin>
                        </Link>
                    </LogoCenter>
                </Corpo>
            </>
        )

    }

}