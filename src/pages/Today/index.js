import Footer from "../../componentes/Footer/index.js";
import Header from "../../componentes/Header/index.js";
import { Container, SubTitulo, CaixaSubTitulo, Botao, Legenda } from "./style.js";

export default function Today() {
    return (
        <>
            <Header />
            <Container>
                <CaixaSubTitulo>
                    <SubTitulo>Meus hábitos</SubTitulo>
                    <Botao>+</Botao>
                </CaixaSubTitulo>
                <Legenda>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Legenda>
            </Container>
            <Footer />
        </>
    )
}