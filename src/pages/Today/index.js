import { useState } from "react";
import Footer from "../../componentes/Footer/index.js";
import Header from "../../componentes/Header/index.js";
import Habitos from "../Habitos/index.js";
import { Container, SubTitulo, CaixaSubTitulo, Botao, Legenda } from "./style.js";

export default function Today() {
    const [tela , setTela] = useState(true)
if(tela === true){
    return (
        <>
            <Header />
            <Container>
                <CaixaSubTitulo>
                    <SubTitulo>Meus hábitos</SubTitulo>
                    <Botao onClick={() => setTela(false)} >+</Botao>
                </CaixaSubTitulo>
                <Legenda>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Legenda>
            </Container>
            <Footer />
        </>
    )
    
    }
    if(tela === false){
        return(
            <Habitos/>
        )
    }
}