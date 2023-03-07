import styled from "styled-components";

export const Title = styled.p`
color: var(--color-text);
-webkit-text-stroke: 1px black;
margin: 0px 0px 7px 0px;
`

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
flex-direction: column;
gap: 34px;
width: 97%;
height: 445px;
background-color: var(--color-bg);
border: 1px solid var(--color-dark);
border-radius: 40px;
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
`
export const Label = styled.label`
color: var(--color-text);
-webkit-text-stroke: 1px black;
margin-left: 8px;
`

export const H1 = styled.h1`
font-family: 'Ruda';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 37px;
text-align: center;
color: #B40025;
-webkit-text-stroke: 1px black;
margin: 0px;

`

export const IMGCloseWrapper = styled.div`
    display: flex;
    justify-content: right;
    padding-right: 17px;
    padding-top: 21px;

`