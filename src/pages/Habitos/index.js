import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Footer from "../../componentes/Footer/index.js";
import Header from "../../componentes/Header/index.js";
import UsuarioContext from "../../providers/usuarioContext.js";

import { Habito,Salvar, Separar, Tabela , CreatHabit, Habit, Input, Semana, Cancelar, Legenda, Domingo, Segunda, Terca, Quarta, Quinta, Sexta, Sabado } from "./style.js";



export default function Habitos() {
    const [name, setName] = useState("")
    const [etapa, setEtapa] = useState(1)
    const [habitoFeito , setHabitoFeito] = useState([])
    const [dia, setDia] = useState([])
    const [domingo, setDomingo] = useState(false);
    const [segunda, setSegunda] = useState(false);
    const [terca, setTerca] = useState(false);
    const [quarta, setQuarta] = useState(false);
    const [quinta, setQuinta] = useState(false);
    const [sexta, setSexta] = useState(false);
    const [sabado, setSabado] = useState(false);
    const { token } = useContext(UsuarioContext)
    console.log(token)
    let diaSemana = [...dia];


    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }

    }
    console.log(config)
    console.log(token)

    function EnviarHabito() {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const newHabito = {
            name: name,
            days: dia
        }
        console.log(newHabito)
        const promise = axios.post(URL, newHabito, config)
        promise.then((response) => {
            console.log(response.data)


        })
        promise.catch((erro) => {
            console.log(erro)

        })
    }


    useEffect(() => {
      
             const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
             const promise = axios.get(URL , config)
             promise.then((response)=>{
                 console.log(response.data)
                 setHabitoFeito(response.data)
            
             })
             promise.catch((erro)=>{
                 console.log(erro)
             })
        
    }, [])

    function DiasDaSemana(){
        return(
            <>
            <Domingo
            background={domingo ? "#CFCFCF" : "#ffffff"}
            color={domingo ? "#ffffff" : "#CFCFCF"}
            onClick={() => {
                setDomingo(!domingo);
                let index = diaSemana.indexOf(0);
                if (!domingo) {
                    setDia([...diaSemana, 0]);
                } else {
                    diaSemana.splice(index, 1);
                    setDia(diaSemana);
                }
            }}

        >
            D
        </Domingo>
        <Segunda
            background={segunda ? "#CFCFCF" : "#ffffff"}
            color={segunda ? "#ffffff" : "#CFCFCF"}
            onClick={() => {
                setSegunda(true);
                let index = diaSemana.indexOf(1);
                if (!domingo) {
                    setDia([...diaSemana, 1]);
                } else if (index > -1) {
                    diaSemana.splice(index, 1);
                    setDia(diaSemana);
                }
            }}

        >
            S
        </Segunda>
        <Terca
            background={terca ? "#CFCFCF" : "#ffffff"}
            color={terca ? "#ffffff" : "#CFCFCF"}
            onClick={() => {
                setTerca(!terca);
                let index = diaSemana.indexOf(2);

                if (!terca) {
                    setDia([...diaSemana, 2]);
                } else if (index > -1) {
                    diaSemana.splice(index, 1);
                    setDia(diaSemana);
                }

            }}

        >
            T
        </Terca>
        <Quarta
            background={quarta ? "#CFCFCF" : "#ffffff"}
            color={quarta ? "#ffffff" : "#CFCFCF"}
            onClick={() => {
                setQuarta(!quarta)
                        let index = diaSemana.indexOf(3);

                        if (!quarta) {
                            setDia([...diaSemana, 3]);
                        } else if (index > -1) {
                            diaSemana.splice(index, 1);
                            setDia(diaSemana);
                        }
                    }}

                >
                    Q
                </Quarta>
                <Quinta
                    background={quinta ? "#CFCFCF" : "#ffffff"}
                    color={quinta ? "#ffffff" : "#CFCFCF"}
                    onClick={() => {
                        setQuinta(!quinta);
                        let index = diaSemana.indexOf(4);

                        if (!quinta) {
                            setDia([...diaSemana, 4]);
                        } else if (index > -1) {
                            diaSemana.splice(index, 1);
                            setDia(diaSemana);
                        }
                    }}

                >
                    Q
                </Quinta>
                <Sexta
                    background={sexta ? "#CFCFCF" : "#ffffff"}
                    color={sexta ? "#ffffff" : "#CFCFCF"}
                    onClick={() => {
                        setSexta(!sexta);
                        let index = diaSemana.indexOf(5);

                        if (!sexta) {
                            setDia([...diaSemana, 5]);
                        } else if (index > -1) {
                            diaSemana.splice(index, 1);
                            setDia(diaSemana);
                        }
                    }}

                >
                    S
                </Sexta>
                <Sabado
                    background={sabado ? "#CFCFCF" : "#ffffff"}
                    color={sabado ? "#ffffff" : "#CFCFCF"}
                    onClick={() => {
                        setSabado(!sabado);
                        let index = diaSemana.indexOf(6);

                        if (!terca) {
                            setDia([...diaSemana, 6]);
                        } else if (index > -1) {
                            diaSemana.splice(index, 1);
                            setDia(diaSemana);
                        }
                    }}

                >
                    S
                </Sabado>
            </>
        )
    }
    const MontarSemana = DiasDaSemana()
    function HabitosFinais({nome , dias}){
        return(
            <Tabela>
            <h2>{nome}</h2>
            <Semana>
            <Domingo
                      background={dias.includes(0) ? "#CFCFCF" : "#FFFFFF"}
                      color={dias.includes(0) ? "#FFFFFF" : "#CFCFCF"}
                    >
                      D
                    </Domingo>
                    <Segunda
                      background={dias.includes(1) ? "#CFCFCF" : "#FFFFFF"}
                      color={dias.includes(1) ? "#FFFFFF" : "#CFCFCF"}
                    >
                      S
                    </Segunda>
                    <Terca
                      background={dias.includes(2) ? "#CFCFCF" : "#FFFFFF"}
                      color={dias.includes(2) ? "#FFFFFF" : "#CFCFCF"}
                    >
                      T
                    </Terca>
                    <Quarta
                      background={dias.includes(3) ? "#CFCFCF" : "#FFFFFF"}
                      color={dias.includes(3) ? "#FFFFFF" : "#CFCFCF"}
                    >
                      Q
                    </Quarta>
                    <Quinta
                      background={dias.includes(4) ? "#CFCFCF" : "#FFFFFF"}
                      color={dias.includes(4) ? "#FFFFFF" : "#CFCFCF"}
                    >
                      Q
                    </Quinta>
                    <Sexta
                      background={dias.includes(5) ? "#CFCFCF" : "#FFFFFF"}
                      color={dias.includes(5) ? "#FFFFFF" : "#CFCFCF"}
                    >
                      S
                    </Sexta>
                    <Sabado
                      background={dias.includes(6) ? "#CFCFCF" : "#FFFFFF"}
                      color={dias.includes(6) ? "#FFFFFF" : "#CFCFCF"}
                    >
                      S
                    </Sabado>
            </Semana>
            <img src="assets/imgs/trash.png" alt="lixo" />
        </Tabela>
        )
    }

    if (habitoFeito.length === 0) {

        return (
            <>
                <Header />
                <Habito>
                    <CreatHabit>
                        <h2>Meus Habitos</h2>
                        <button ><h3>+</h3></button>
                    </CreatHabit>
                    <Habit>
                        <Input type="text" placeholder="Nome do Habito" value={name} onChange={(e) => setName(e.target.value)}></Input>
                        <Semana>
                            {MontarSemana}
                        </Semana>
                        <Separar>
                            <Salvar><h3>Cancelar</h3></Salvar>
                            <Cancelar onClick={() => EnviarHabito()}><h3>Salvar</h3></Cancelar>
                        </Separar>
                    </Habit>
                    <Legenda>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Legenda>
                </Habito>
                <Footer />

            </>
        )
    }
    if (habitoFeito.length !== 0) {

        return (
            <>
                {/* <Header />
                <Habito>
                    <CreatHabit>
                        <h2>Meus Habitos</h2>
                        <button ><h3>+</h3></button>
                    </CreatHabit>
                   {habitoFeito.map((habito , index)=>{
                       return(
                          <HabitosFinais 
                          nome={habito.name}
                          dias={habito.days}
                          />
                       )
                   })}
                </Habito>
                <Footer />

 */}
    <Header />
                <Habito>
                    <CreatHabit>
                        <h2>Meus Habitos</h2>
                        <button ><h3>+</h3></button>
                    </CreatHabit>
                    <Habit>
                        <Input type="text" placeholder="Nome do Habito" value={name} onChange={(e) => setName(e.target.value)}></Input>
                        <Semana>
                            {MontarSemana}
                        </Semana>
                        <Separar>
                            <Salvar><h3>Cancelar</h3></Salvar>
                            <Cancelar onClick={() => EnviarHabito()}><h3>Salvar</h3></Cancelar>
                        </Separar>
                    </Habit>
                    <Legenda>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Legenda>
                </Habito>
                <Footer />

            </>
        )
    }

  
}

