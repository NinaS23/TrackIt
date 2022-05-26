import { Link } from "react-router-dom";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Footer() {

   
    return (
        <>
            <Fixed>
                <Link to={"/habitos"}>
                    <Links>Hábitos</Links>
                </Link>
                <Link to={"/hoje"}>
                    <Div>
                        <CircularProgressbar
                            value={90}
                            text="Hoje"
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#52B6FF",
                                textColor: "#fff",
                                pathColor: "#fff",
                                trailColor: "transparent",
                            })}
                        />
                    </Div>
                </Link>
                <Link to={"/historico"}>
                    <Links>Histórico</Links>
                </Link>

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
const Div = styled.div`
  position: fixed;
  width: 91px;
  height: 91px;
  bottom: 6px;
  left: 170px;
`;