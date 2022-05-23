import styled from "styled-components";

export default function Header() {
    return (
        <Topo>
            <Titulo>trackit</Titulo>
            <Image src="" alt="" />
        </Topo>
    )
}

const Topo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`
const Titulo = styled.h1`
    width: 97px;
    height: 49px;
    left: 18px;
    top: 10px;
    margin-left: 5%;
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
`
const Image = styled.img`
        width: 3.5rem;
        height: 3.5rem;
        object-fit: cover;
        object-position: center;
        margin-right: 15px;
        border-radius: 50%;

`

