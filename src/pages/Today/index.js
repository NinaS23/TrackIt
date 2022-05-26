import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Footer from "../../componentes/Footer/index.js";
import Header from "../../componentes/Header/index.js";
import UsuarioContext from "../../providers/usuarioContext.js";
import Habitos from "../Habitos/index.js";
import { Container, SubTitulo, False ,SequenciaTrue,  Sequencia, Legenda , Hoje , ContainerHOje , Titulo ,Imagem , Div} from "./style.js";

export default function Today() {
    const [tela, setTela] = useState(true)
    const [today , setToday] = useState([])
    const { token } = useContext(UsuarioContext)
    const [cor , setCor] = useState(false)
   


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









    function Selecionado( indexDia){

        console.log(indexDia)
        let novoMap = today.map((tarefas , index)=>{
            if(index === indexDia){
                return{
                       ...tarefas,
                       done:true

                }
            }else{
                return{
                    ...tarefas
                }
            }
            
        })
        setToday(novoMap)
    }






    function RetornaTarefas({done , atual , maiorSequencia , name , index}){
       
        if (done === false) {
            return (
                <Hoje>
                    <Titulo>
                        {name}
                    </Titulo>
                    <Sequencia>
                        Sequência atual: {atual} dias
                        recorde: {maiorSequencia} dias
                    </Sequencia>

                    <False onClick={() => Selecionado(index)}>
                        <Imagem src="assets/imgs/check.png" alt="check" />
                    </False>
                </Hoje>
            )
        }
        if( done === true ){
            return(
                <Hoje>
                <Titulo>
                    {name}
                </Titulo>
                <SequenciaTrue>
                    Sequência atual: {atual} dias
                    recorde: {maiorSequencia} dias
                </SequenciaTrue>

                <Div>
                    <Imagem src="assets/imgs/check.png" alt="check" />
                </Div>
            </Hoje>
            )
        }
    }

    




console.log(today)

    if (tela === true) {
        return (
            <>
                <Header />
                <Container>
                    <SubTitulo>Dia {dataAtual}</SubTitulo>
                    <Legenda>Nenhum hábito concluído ainda</Legenda>
                    <ContainerHOje>
                        {today.map((item, index) => {
                            console.log(item.done)
                       
                            return (
                                <RetornaTarefas
                                done={item.done} 
                                atual={item.currentSequence}
                                maiorSequencia={item.highestSequence}
                                name={item.name}
                                index={index}
                                />
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