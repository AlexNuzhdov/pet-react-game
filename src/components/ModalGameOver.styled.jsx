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
border-radius: 36px;
`

export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 60px;
width: 97%;
height: 445px;
background-color: var(--color-bg);
border: 1px solid var(--color-dark);
border-radius: 32px;
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
-webkit-text-stroke: 0.5px black;
margin: 50px 0px 71px 0px;
`
export const IconCross = styled.img`
position: absolute;
right: 15px;
top: 15px;
`

export const ModalBG = styled.img`
width: 80px;
position: absolute;
top: 144px;
left: 50%;
transform: translate(-50%,-50%);
`

export const Title = styled.p`
font-size: 30px;
line-height: 37px;
color: var(--color-text);
-webkit-text-stroke: 1px black;
margin: 0;
text-align: center;
@media (max-width: 390px){
	font-size: 22px;	
}
`

