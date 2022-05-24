import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Footer from "../../componentes/Footer/index.js";
import Header from "../../componentes/Header/index.js";
import UsuarioContext from "../../providers/usuarioContext.js";

import { Habito, CreatHabit, Habit, Input, Semana, Cancelar, Legenda, Domingo, Segunda, Terca, Quarta, Quinta, Sexta, Sabado } from "./style.js";



export default function Habitos() {
    const [name, setName] = useState("")
    const [etapa, setEtapa] = useState(1)
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
            name,
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
    useEffect(() => EnviarHabito());

    useEffect(() => {
      
             const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
             const promise = axios.get(URL , config)
             promise.then((response)=>{
                 console.log(response.data)
             })
             promise.catch((erro)=>{
                 console.log(erro)
             })
        
    }, [])

    if (etapa === 1) {

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


                        </Semana>

                        <Cancelar>Cancelar</Cancelar>
                        <Cancelar onClick={() => EnviarHabito()}>Salvar</Cancelar>
                    </Habit>
                    <Legenda>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Legenda>
                </Habito>
                <Footer />

            </>
        )
    }
}

