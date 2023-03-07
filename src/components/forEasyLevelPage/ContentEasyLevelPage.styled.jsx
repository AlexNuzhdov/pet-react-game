import styled from "styled-components";

export const Title = styled.div`
color: var(--color-light);
-webkit-text-stroke: 0.7px black;
font-size: 15px;
line-height: 18px;
margin: 0 auto;
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