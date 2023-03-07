import iconSound from '../../assets/icons/громкость звука.svg'
import iconRuleofGame from '../../assets/icons/играть.svg'
import headerImg from '../../assets/pictures/headerImg.png'
import {HeaderWrapper, IMGCat} from '../forSharedLayout/Header.styled'
import React, { useState } from "react";
import ModalPlay from "components/forSharedLayout/ModalPlayPage";



const Header = () => {

	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};


	return (
        <div>
			<HeaderWrapper>
				<img src={iconSound} alt='some value'></img>
				<img src={iconRuleofGame} onClick={handleOpen} alt='rule of game'></img>
				{isOpen && <ModalPlay handleClose={handleClose} />}
			</HeaderWrapper>
			<div>
				<IMGCat src={headerImg}  alt='cat'></IMGCat>
			</div>
			
	    </div>
		

	)
}
export default Header
