import { useState, useEffect } from "react";
import { shufflePictures } from "../arraysCards/shufflePictures";
import backdrop from "../assets/pictures/backdrop.png";
import { Wrapper, CardFront, CardBack } from "./Card.styled";


const Card = ({ array, whoIsWin }) => {

	const [pictures, setPictures] = useState([])
	const [firstCard, setFirstCard] = useState(null);

	useEffect(() => {
		setPictures(shufflePictures(array))
	}, [array])

	const handleItemClick = (index) => {
		const newItems = [...pictures];
		newItems[index] = { ...newItems[index], rotated: true };
		setPictures(newItems);
		if (firstCard === null) {
			setFirstCard(newItems[index]);
			return
		}
		else if (firstCard.src !== newItems[index].src) {
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
				setPictures(arr)
				whoIsWin(arr)
				return
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