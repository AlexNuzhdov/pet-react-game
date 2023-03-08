import ModalLevels from "components/ModalLevels";
import React, { useState } from "react";
import Envelope from "components/Envelope";
import { Title } from "./ContentHomePage.styled";
import BG from '../../assets/pictures/BG.png'
//принимаем картинку котаб стили компонент кнопки


const ContentHomePage = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<>

			{isOpen && <ModalLevels handleClose={handleClose} />}
			<img style={{ width: "100%" }} src={BG} alt='cat'></img>
			<div onClick={handleOpen}>
				<Envelope ><Title>Играть</Title></Envelope>
			</div>

		</>


		//модальное окно одно и другое 
		//картинка кота наверно бэкграундом
		/* background-image:url(сюда картинку);
	background-repeat: no-repeat;
	background-position: center; */
		//кнопка приходит как отдельный компонент
	)
}
export default ContentHomePage;


