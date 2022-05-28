import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Footer from "../../componentes/Footer/index.js";
import Header from "../../componentes/Header/index.js";
import UsuarioContext from "../../providers/usuarioContext.js";
import Habitos from "../Habitos/index.js";
import dayjs from "dayjs";
import { Container, SubTitulo, False ,SequenciaTrue,  Sequencia, Legenda , Hoje , ContainerHOje , Titulo ,Imagem , Div} from "./style.js";

export default function Today() {
    const [tela, setTela] = useState(true)
    const [doneState , setDoneState] = useState(false)
    const [today , setToday] = useState([])
    const { token } = useContext(UsuarioContext)
  
    const [tarefa , setTarefa] = useState(0)

    
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let dataAtual = dia + '/' + mes;

   

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


   
        function enviarTarefas ({tarefa , doneState}){
        if(doneState === true){
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${tarefa}/check`
        const promise = axios.post(URL,{}, config)
        promise.then((response) => {
            console.log(response.data)
            
        });
        promise.catch((erro) => {
            console.log(erro)
        })
    }else{
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${tarefa}/check`
        const promise = axios.post(URL,{}, config)
        promise.then((response) => {
            console.log(response.data)
            setDoneState(false)
            
        });
        promise.catch((erro) => {
            console.log(erro)
        })
    }
}
  







    function Selecionado( indexDia,  id , feito){
      
       
       
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
       setTarefa(id)
       setDoneState(true)
    }




    function RetornaTarefas({done , atual , maiorSequencia , name , index , id}){
       
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

                    <False onClick={() => Selecionado(index , id , done)}>
                        <Imagem onClick={() => enviarTarefas()} src="assets/imgs/check.png" alt="check" />
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
                                <RetornaTarefas
                                done={item.done} 
                                atual={item.currentSequence}
                                maiorSequencia={item.highestSequence}
                                name={item.name}
                                index={index}
                                id={item.id}
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