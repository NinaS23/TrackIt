import styled from "styled-components"



const Container = styled.div`
margin-top: 140%;
display: flex;
flex-direction: column;
justify-content: center;
width: 300px;
height: 70px;

`

const SubTitulo = styled.h2`
width: 172px;
height: 29px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 700;
font-size: 35px;
line-height: 29px;
/* identical to box height */


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
const Hoje = styled.div`
position: relative;
height: 120px;
width: 340px;
background-color:  #E5E5E5;
margin-top:3%;
padding-bottom: 50px;
h4{
 width: 146px;
height: 32px;
margin-top:15%;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 12.976px;
line-height: 16px;
color: #666666;
margin-left: 3%;
}

`
const False = styled.div`

width: 59px;
height: 59px;
background: #EBEBEB;
border: 1px solid #E7E7E7;
border-radius: 5px;
margin-left:70%;
display: flex;
justify-content: center;
align-items: center;

`

const Div = styled.div`
width: 59px;
height: 59px;
background: #8FC549;
border: 1px solid #E7E7E7;
border-radius: 5px;
margin-left:70%;
display: flex;
justify-content: center;
align-items: center;

`
const ContainerHOje  = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-left:17%;


`
const Titulo = styled.h2`
margin-left: 3%;
position: absolute;
width: 208px;
height: 25px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
/* identical to box height */


color: #666666;


`
const Imagem = styled.img`
margin: 0 auto;

`
export{
    Container,
    SubTitulo,
    CaixaSubTitulo,
    Botao,
    Legenda,
    Hoje,
    ContainerHOje,
    Titulo,
    Imagem,
    Div,
    False
    }