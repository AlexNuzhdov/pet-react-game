import ModalLevels from "components/ModalLevels";
import React, { useState } from "react";
import Envelope from "components/Envelope";
import { Title } from "./ContentHomePage.styled";
import BG from "../../assets/pictures/BG.png";

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
			<img style={{ width: "85%" }} src={BG} alt="cat"></img>
			<div onClick={handleOpen}>
				<Envelope ><Title>Играть</Title></Envelope>
			</div>
		</>
	)
}
export default ContentHomePage;


