import styled from "styled-components";

export default function Footer(){
    return(
        <>
        <Fixed>
        <Links>Hábitos</Links>
        <Links>Histórico</Links>
        </Fixed>
        </>
    )
}
const Fixed = styled.div`

display: flex;
  
   justify-content: space-between;
    position: relative;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 70px;
    box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.25);
`
const Links = styled.h1`


width: 79px;
height: 22px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 22px;
text-align: center;
color: #52B6FF;


`