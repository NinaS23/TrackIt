import axios from "axios";
import { useContext, useEffect } from "react";
import UsuarioContext from "../../providers/usuarioContext";

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
        <h2>sou historico</h2>
    )
}