import styled from "styled-components";



const Habito = styled.div`

margin-top: 30%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const CreatHabit = styled.div`
width: 340px;
height: 60px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
justify-content: space-between;

h2{
width: 148px;
height: 29px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
}

button{
    border-style:none;
margin-top: 5%;
width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
}
h3{
margin-top: 7px;
width: 16px;
height: 34px;
left: 329px;
top: 98px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 26.976px;
line-height: 34px;
text-align: center;
margin-top: 5%;
margin-left: 5%;
color: #FFFFFF;

    
}
`
const Habit = styled.div`
width: 340px;
height: 180px;
background: aqua;
border-radius: 5px;
margin-top: 10%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 3%;
`

const Input = styled.input`
width: 303px;
height: 45px;
left: 36px;
top: 165px;

background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
`
const Semana= styled.div`
display: flex;


`
const Dia = styled.div`
width: 30px;
height: 30px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 2%;
margin-top: 3%;
h4{
color: #DBDBDB;
font-weight: 700;
font-family: 'Lexend Deca';
font-style: normal;
font-size: 19.976px;
line-height: 25px;
}
`


const Cancelar = styled.button`
width: 84px;
height: 35px;
left: 257px;
top: 277px;

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
Habito,
CreatHabit,
Habit,
Input,
Semana,
Dia,
Cancelar,
Legenda

}