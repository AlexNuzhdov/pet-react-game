import styled from "styled-components";



export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 81%;
height: 461px;
background-color: var(--color-text);
border: 1px solid var(--color-dark);
border-radius: 40px;
`

export const Layer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 97%;
height: 453px;
background-color: var(--color-light);
border: 1px solid var(--color-dark);
border-radius: 40px;
`

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 97%;
height: 445px;
background-color: var(--color-bg);
border: 1px solid var(--color-dark);
border-radius: 40px;
position: relative;
`
export const ModalOverlow = styled.div`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
background-color: var(--color-modalbg);
display: flex;
justify-content: center;
align-items: center;
z-index: 50;
`

export const Info = styled.h1`
font-size: 30px;
line-height: 37px;
text-align: center;
color: var(--color-text);
-webkit-text-stroke: 1px black;
margin: 0px;
z-index: 55;
`
export const IconCross = styled.img`
position: absolute;
right: 15px;
top: 15px;
`

export const ModalBG = styled.img`
width: 80px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
`

