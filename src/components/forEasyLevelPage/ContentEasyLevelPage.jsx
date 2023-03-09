import Card from "../Card"
import { useState, useEffect } from "react";
import { Title, Container, Wrapper } from "./ContentEasyLevelPage.styled";
import { easyArray } from "../../arraysCards/arraysCards";
import Timer from "components/Timer";
import Envelope from "components/Envelope";
import ModalGameOver from "components/ModalGameOver";



const ContentEasyLevelPage = () => {

	const [gameOver, setGameOver] = useState(false);
	const [timerEnded, setTimerEnded] = useState(false);


	useEffect(() => {
		setGameOver(false)
	}, [])

	const whoIsWin = (array) => {
		const allCards = array.every(card => card.opacity === 0)
		if (allCards) {
			setGameOver(true);
		}
	}

	return (
		<Wrapper>
			<Container>
				{gameOver && <ModalGameOver />}
				{timerEnded && <div>the time is over</div>}
				<Card array={easyArray} whoIsWin={whoIsWin} />
			</Container>
			<Title>Таймер:</Title>
			<Envelope><Timer setTimerEnded={setTimerEnded} /> </Envelope >
		</Wrapper>
	);
};

export default ContentEasyLevelPage;