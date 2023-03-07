import Card from "../Card"
import { useState, useEffect } from "react";
import { Title, Container } from "./ContentEasyLevelPage.styled";
import { easyArray } from "../../arraysCards/arraysCards";
import Timer from "components/Timer";
import Envelope from "components/Envelope";



const ContentEasyLevelPage = () => {

	const [gameOver, setGameOver] = useState(false);
	const [timerEnded, setTimerEnded] = useState(false);


	useEffect(() => {
		setGameOver(false)
	}, [])

	// const whoWin = (array) => {
	// 	const allCards = array.every(card => card.opacity === 0)
	// 	if (allCards) {
	// 		setGameOver(true);
	// 	}
	// }

	return (
		<div>
			<Container>
				{gameOver && <div>winer</div>}
				<Card easyArray={easyArray} />
			</Container>
			<Title>Таймер:</Title>
			<Envelope><Timer setTimerEnded={setTimerEnded} /> </Envelope >
		</div>
	);
};

export default ContentEasyLevelPage;