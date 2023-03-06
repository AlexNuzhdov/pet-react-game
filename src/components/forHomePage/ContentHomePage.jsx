import ModalLevels from "components/ModalLevels";
import React, { useState } from "react";

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
			<div>
				<button onClick={handleOpen}> Іграть</button>
			</div>
			{isOpen && (
				<div onClick={handleClose}>
					<ModalLevels />
				</div>

			)}
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


