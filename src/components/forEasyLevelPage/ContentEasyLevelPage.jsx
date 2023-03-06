import Card from "../Card"
import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
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

const ContentEasyLevelPage = () => {

	const [gameOver, setGameOver] = useState(false);

	useEffect(() => {
		setGameOver(false)
	}, [])

	const whoWin = (array) => {
		const allCards = array.every(card => card.opacity === 0)
		if (allCards) {
			setGameOver(true);
		}
	}

	return (
		<>
			<Container>
				{gameOver && <div>winer</div>}
				<Card whoWin={whoWin} />
			</Container>
			<div>Таймер</div>
		</>
	);
};

export default ContentEasyLevelPage;