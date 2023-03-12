import { Container, Layer, Wrapper, ModalOverlow, Info, IconCross, ModalBG, Title } from "./ModalGameOver.styled";
import ModalClose from '../assets/icons/cross.svg';
import BGModal from '../assets/pictures/BGModal.png';
import Envelope from "./Envelope";
import { Link } from "react-router-dom";



const ModalGameOver = ({
	handleClose,
	gameOver,
	handleClick,
	setGameOver,
	setTimerEnded,
	setModal }) => {

	const playAgain = () => {
		handleClick();
		setGameOver(false);
		setTimerEnded(false);
		setModal(true);
	}
	const textModal = !gameOver ? "Не получилось!Попробуй сыграть снова!" : "У тебя отлично получилось!Сыграем еще раз?"

	return (
		<ModalOverlow >
			<Container>
				<Layer>
					<Wrapper>
						<Link to="/">
							<IconCross src={ModalClose} alt='icon' width="35px"></IconCross>
						</Link>
						<ModalBG src={BGModal} alt='icon' width="35px"></ModalBG>
						<div style={{ zIndex: "45" }}>
							<Info>
								{textModal}
							</Info>
							<div onClick={playAgain}>
								<Envelope><Title>Играть снова</Title></Envelope>
							</div>
						</div>
					</Wrapper>
				</Layer>
			</Container>
		</ModalOverlow >

	)
}
export default ModalGameOver;