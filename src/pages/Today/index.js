import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Footer from "../../componentes/Footer/index.js";
import Header from "../../componentes/Header/index.js";
import UsuarioContext from "../../providers/usuarioContext.js";
import Habitos from "../Habitos/index.js";
import { Container, SubTitulo, Legenda , Hoje , ContainerHOje , Titulo ,Imagem} from "./style.js";

export default function Today() {
    const [tela, setTela] = useState(true)
    const [today , setToday] = useState([])
    const { token } = useContext(UsuarioContext)


    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let dataAtual = dia + '/' + mes;

    console.log(dataAtual)

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }

    }
    

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const promise = axios.get(URL, config)
        promise.then((response) => {
            console.log(response.data)
            setToday(response.data)
        });
        promise.catch((erro) => {
            console.log(erro)
        })
    }, [])



    if (tela === true) {
        return (
            <>
                <Header />
                <Container>
                    <SubTitulo>Dia {dataAtual}</SubTitulo>
                    <Legenda>Nenhum hábito concluído ainda</Legenda>
                    <ContainerHOje>
                        {today.map((item, index) => {
                            return (
                                <Hoje>
                                    <Titulo>
                                        {item.name}
                                    </Titulo>
                                    <h4>
                                        Sequência atual: {item.currentSequence} dias
                                        recorde: {item.highestSequence} dias
                                    </h4>
                                    <div>
                                        <Imagem src="assets/imgs/check.png" alt="check" />
                                    </div>
                                </Hoje>
                            )
                        })}
                    </ContainerHOje>
                </Container>

                <Footer />
            </>
        )

    }
    if (tela === false) {
        return (
            <Habitos />
        )
    }
}