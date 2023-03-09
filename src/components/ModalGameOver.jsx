import { Container, Layer, Wrapper, ModalOverlow, Info, IconCross, ModalBG } from "./ModalGameOver.styled";
import ModalClose from '../assets/icons/cross.svg';
import BGModal from '../assets/pictures/BGModal.png';


const ModalGameOver = ({ handleClose }) => {
	// const navigate = useNavigate();



	return (
		<ModalOverlow onClick={handleClose} >
			<Container>
				<Layer>
					<Wrapper>
						<IconCross src={ModalClose} onClick={handleClose} alt='icon' width="35px"></IconCross>
						<ModalBG src={BGModal} onClick={handleClose} alt='icon' width="35px"></ModalBG>

						<Info>
							Не получилось!
							попробуй сыграть снова!
						</Info>
					</Wrapper>
				</Layer>
			</Container>
		</ModalOverlow>

	)
}
export default ModalGameOver;