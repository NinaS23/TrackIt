import axios from "axios";
import { useContext, useEffect } from "react";
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import UsuarioContext from "../../providers/usuarioContext";
import { Corpo , Titulo , SubTitulo} from "./style.js";
export default function Historico(){
    const { token } = useContext(UsuarioContext)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }

    }

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily"
        const promise = axios.get(URL , config)
        promise.then((response) => {
            console.log(response.data)
            
        });
        promise.catch((erro) => {
            console.log(erro)
        })
    }, [])


    return(
     


    <>
      <Corpo>
        <Header />
        <Titulo>Histórico</Titulo>
        <SubTitulo>Em breve você poderá ver o histórico dos seus hábitos aqui!</SubTitulo>
        <Footer />
      </Corpo>
    </>



    )
}

