import styled from "styled-components";

export const Title = styled.div`
color: var(--color-light);
-webkit-text-stroke: 0.7px black;
font-size: 20px;
line-height: 18px;
text-align: center;
margin-bottom: 10px;
`
export const Container = styled.div`
display: flex;
	flex-wrap: wrap;
	justify-content: center;
	column-gap: 8px;
	row-gap: 50px;
	height: 430px;
	align-content: center;
	@media (max-width: 390px){
		column-gap: 20px;
		row-gap: 20px;	
	}
`
export const Wrapper = styled.div`
width: 100%;
`