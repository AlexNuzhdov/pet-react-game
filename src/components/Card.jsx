import styled from "styled-components";
import { useState, useEffect } from "react";
import { shufflePictures } from "arraysCards/CreatorCards"
import backdrop from "../assets/pictures/backdrop.png"


const Wrapper = styled.div`
position: relative;
width: 100px;
height: 100px;
perspective: 600px;
`;

const CardFront = styled.div`
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
transition: transform 0.5s;
transform: ${props => props.rotated ? "rotateY(180deg)" : null};
opacity: ${props => props.opacity};
`;

const CardBack = styled.div`
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
transition: transform 0.5s;
transform: ${props => props.rotated ? "rotateY(0deg)" : "rotateY(180deg)"};
opacity: ${props => props.opacity};
`;

const Card = ({ whoWin }) => {

	const [pictures, setPictures] = useState([])
	const [firstCard, setFirstCard] = useState(null);


	useEffect(() => {
		setPictures(shufflePictures())
	}, [])

	//whoWin(pictures)

	const handleItemClick = (index) => {
		const newItems = [...pictures];

		if (firstCard === null) {
			newItems[index] = { ...newItems[index], rotated: true };
			setPictures(newItems);
			setFirstCard(newItems[index]);
			return
		}
		else if (firstCard.src !== newItems[index].src) {
			console.log('logic')
			newItems[index] = { ...newItems[index], rotated: true };
			setPictures(newItems);
			setTimeout(() => {
				const arr = newItems.map(card => {
					if (card.rotated) {
						return {
							...card,
							rotated: false
						}
					}
					return card
				}
				)
				setPictures(arr);
			}, 500);
			setFirstCard(null);

		}
		else if (firstCard.src === newItems[index].src) {
			newItems[index] = { ...newItems[index], rotated: true };
			setPictures(newItems);
			setTimeout(() => {
				const arr = newItems.map(card => {
					if (card.rotated) {
						return {
							...card,
							opacity: 0
						}
					}
					return card
				}
				)
				setFirstCard(null)
				return setPictures(arr);
			}, 500);
		}

	}

	return (
		<>
			{pictures.map((el, index) => (
				<Wrapper key={index} >
					<CardFront rotated={el.rotated} opacity={el.opacity} onClick={() => { handleItemClick(index) }}>
						<img src={backdrop} alt="front" />
					</CardFront>
					<CardBack rotated={el.rotated} opacity={el.opacity}>
						<img src={el.src} alt={el.alt} />
					</CardBack>
				</Wrapper>
			))}
		</>
	);
};
export default Card;