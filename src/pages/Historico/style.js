import styled from "styled-components"



const Titulo = styled.h1`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;
  color: #126ba5;
  margin-top: 98px;
`;

const SubTitulo = styled.h2`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: #666666;
  margin-top: 17px;
  width: 338px;
  height: 74px;
`;

const Corpo = styled.body`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #e5e5e5;
  padding: 28px 22px 70px 15px;
`;

export{

    Corpo,
    SubTitulo,
    Titulo
}