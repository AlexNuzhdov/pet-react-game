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
width: 98%;
height: 453px;
background-color: var(--color-light);
border: 1px solid var(--color-dark);
border-radius: 36px;
`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 34px;
width: 98%;
height: 445px;
background-color: var(--color-bg);
border: 1px solid var(--color-dark);
border-radius: 30px;
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

export const ChekboxContainer = styled.div`
margin-left: 20px;

label {
font-family: 'Ruda';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 37px;
color: #B40025;
-webkit-text-stroke: 1px black;

}

input {
  opacity: 0;
  position: absolute;
}

input:checked {
    &+label::before {
        background-color: red;
        box-shadow: inset 0 0 0 6px  #FED650;
    }
}

label::before {
    content: '';
    background:  #F5DA81;
    border-radius: 100%;
    border: 1px solid black;
    display: inline-block;
    width: 30px;
    height: 30px;
    position: relative;
    top: 0px;
    margin-right: 18px; 
    vertical-align: top;
    cursor: pointer;
    text-align: center;
    transition: all 250ms ease;
}

`