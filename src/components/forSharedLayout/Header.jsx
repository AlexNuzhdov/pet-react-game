import iconSound from '../../assets/icons/громкость звука.svg'
import iconRuleofGame from '../../assets/icons/кнопка _как играть__.svg'
import headerImg from '../../assets/pictures/headerImg.png'
import {HeaderWrapper} from '../forSharedLayout/Header.styled'
//принимает иконки, стили
//принимает ауди(нужно найти музыку для игры)


const Header = () => {


	return (

		<HeaderWrapper>
			<img src={iconSound} alt='some value'></img>
			<img src={iconRuleofGame} alt='rule of game'></img>
			<img src={headerImg}  alt='cat'></img>
		</HeaderWrapper>
		//флекс
		//тут два дива(спэйс бэтвин бордер радиуса 50%) 
		// внутри иконки 

	)
}
export default Header
