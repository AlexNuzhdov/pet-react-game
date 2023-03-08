import iconSound from '../../assets/icons/speaker.svg'
import iconNotSound from '../../assets/icons/not_speaker.svg'
import iconRuleofGame from '../../assets/icons/играть.svg'

import { HeaderWrapper, Circule } from '../forSharedLayout/Header.styled'
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
		<>
			<HeaderWrapper>

				<audio id="my-audio" src={melody}></audio>

				{isPlaying ?
					<Circule>
						<img src={iconSound} onClick={handleClick} alt='sound'></img>
					</Circule>
					:
					<Circule>
						<img src={iconNotSound} onClick={handleClick} alt='sound'></img>
					</Circule>}

				<img src={iconRuleofGame} onClick={handleOpen} alt='rule of game'></img>
				{isOpen && <ModalPlay handleClose={handleClose} />}
			</HeaderWrapper>

		</>
	)
}
export default Header
