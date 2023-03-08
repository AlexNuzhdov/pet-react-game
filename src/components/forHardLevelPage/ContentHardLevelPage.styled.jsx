import styled from "styled-components";

export const Title = styled.div`
color: var(--color-light);
-webkit-text-stroke: 0.7px black;
font-size: 15px;
line-height: 18px;
text-align: center;
`
export const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: 44px 0px 44px 0px;
height: 430px;
align-content: center;
gap: 8px;
@media (min-width: 340px){
	gap:2px; 	
}
`
export const Wrapper = styled.div`
width: 100%;
`