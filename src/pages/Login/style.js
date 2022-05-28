import styled from "styled-components"


const LogoCenter =styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 33%;
`
const Logo = styled.img`
width: 230px;
height: 200px;
`

const Input = styled.input`
width: 303px;
height: 45px;
margin-top: 5%;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
`
const Botao = styled.button`
width: 303px;
height: 45px;
background: #52B6FF;
border-radius: 4.63636px;
border-style: none;
display: flex;
justify-content: center;
align-items: center;
margin-top: 5%;
`
const Entrar =  styled.h2`
width: 64px;
height: 26px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
`
const LinkLogin = styled.h4`
width: 232px;
height: 17px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
`
const Corpo = styled.body`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #FFFFFF;
  padding: 28px 22px 70px 15px;
`;



export {
    LogoCenter,
    Logo,
    Input,
    Botao,
    Entrar,
    LinkLogin,
    Corpo
  }