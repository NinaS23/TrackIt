import Footer from "../../componentes/Footer/index.js";
import Header from "../../componentes/Header/index.js";
import UsuarioContext from "../../providers/usuarioContext.js";
import {Habito , CreatHabit ,Habit , Input ,Semana , Dia, Cancelar,Legenda} from "./style.js";
export default function Habitos() {
  
    const semanas = [
        {
        id: 1,
        name: "D",
        set: false
    },
    {
        id:2,
        name:"S",
        set:false
    },
    {
        id:3,
        name:"T",
        set:false
    },
    {
        id:4,
        name:"Q",
        set:false
    },
    {
        id:5,
        name:"Q",
        set:false
    },
    {
        id:6,
        name:"S",
        set:false
    },
    {
        id:7,
        name:"S",
        set: false
        }
    ]


    function MontarSemana() {
        return (
            <Semana>
                {semanas.map((semana) => {
                    return (
                        <Dia>
                            <h4 id={semana.id} key={semana.id}>{semana.name}</h4>
                        </Dia>
                    )
                })}
            </Semana>
        )
    }
    const DiasDaSemana = MontarSemana()


    return (
        <>
            <Header />
            <Habito>
                <CreatHabit>
                    <h2>Meus Habitos</h2>
                    <button ><h3>+</h3></button>
                </CreatHabit>
                <Habit>
                    <Input type="text" placeholder="Nome do Habito"></Input>
                    {DiasDaSemana}
                    
                    <Cancelar>Cancelar</Cancelar>
                    <Cancelar>Salvar</Cancelar>
                </Habit>
                <Legenda>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Legenda>
            </Habito>
            <Footer />

        </>
    )
}