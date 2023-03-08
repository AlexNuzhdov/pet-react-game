import iconSound from '../../assets/icons/громкость звука.svg'
import iconRuleofGame from '../../assets/icons/играть.svg'

import { HeaderWrapper, IMGCat } from '../forSharedLayout/Header.styled'
import React, { useState } from "react";
import ModalPlay from "components/forSharedLayout/ModalPlayPage";
import melody from '../../assets/audio/audio.mp3';


const Header = () => {

	const [isOpen, setIsOpen] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);



	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleClick = () => {
		const audio = document.getElementById('my-audio');
		if (isPlaying) {
			audio.pause();
			setIsPlaying(false);
		} else {
			audio.play();
			setIsPlaying(true);
		}
	};

	return (
		<div>
			<HeaderWrapper>
				<audio id="my-audio" src={melody}></audio>
				{isPlaying ?
					<img src={iconSound} onClick={handleClick} alt='sound'></img>
					:
					<div onClick={handleClick}> play</div>}
				<img src={iconRuleofGame} onClick={handleOpen} alt='rule of game'></img>
				{isOpen && <ModalPlay handleClose={handleClose} />}
			</HeaderWrapper>

		</div>


	)
}
export default Header
