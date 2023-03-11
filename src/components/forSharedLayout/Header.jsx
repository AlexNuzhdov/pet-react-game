import iconSound from '../../assets/icons/speaker.svg'
import iconNotSound from '../../assets/icons/not_speaker.svg'
import iconRuleofGame from '../../assets/icons/играть.svg'

import { HeaderWrapper, Circule } from '../forSharedLayout/Header.styled'
import React, { useState, useRef, useContext } from "react";
import ModalPlay from "components/forSharedLayout/ModalPlayPage";
import melody from '../../assets/audio/audio.mp3';

import { AudioContext, setAudioElement } from '../Helper';

const Header = () => {
	const audioRef = useRef(null);
	const { audioElement } = useContext(AudioContext);

	const handleLoad = () => {
		setAudioElement(audioRef.current);
	};


	const [isOpen, setIsOpen] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);


	// useEffect(() => {
	// 	const audio = document.getElementById('my-audio');
	// 	const storedIsPlaying = localStorage.getItem('isPlaying');
	// 	if (storedIsPlaying) {
	// 		setIsPlaying(true);
	// 		audio.play();
	// 	}
	// }, []);

	// useEffect(() => {
	// 	localStorage.setItem('isPlaying', isPlaying.toString());
	// }, [isPlaying]);


	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	const handleClick = () => {

		//const audio = document.getElementById('my-audio');
		if (isPlaying) {
			audioElement.pause();
			//localStorage.setItem('hasSound', false);
			setIsPlaying(false);
		} else {
			audioElement.play();
			localStorage.setItem('isPlaying', true);
			setIsPlaying(true);
		}
	};



	return (
		<>
			<AudioContext.Provider value={{ audioElement: audioRef.current, setAudioElement }}>
				<audio ref={audioRef} onLoadedData={handleLoad}>
					<source src={melody} type="audio/mpeg" />
				</audio>
				<HeaderWrapper>

					{/* <audio ref={audioRef} onLoadedData={handleLoad} id="my-audio" src={melody}></audio> */}

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

				{/* rest of your app */}
			</AudioContext.Provider>


		</>
	)
}
export default Header
