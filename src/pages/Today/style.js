import styled from "styled-components"


const Container = styled.div`
margin-top: 30%;
display: flex;
flex-direction: column;
justify-content: center;

`

const SubTitulo = styled.h2`
width: 148px;
height: 29px;
left: 17px;
top: 98px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;

`
const CaixaSubTitulo = styled.div`
display: flex;
justify-content: space-between;


`

const Botao = styled.button`
border-style:none;
margin-top: 5%;
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
`
const Legenda = styled.h3`
width: 338px;
height: 74px;


font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 22px;

color: #666666;


`

export{
Container,
SubTitulo,
CaixaSubTitulo,
Botao,
Legenda
}