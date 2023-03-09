import { Container, Layer, Wrapper, ModalOverlow, Info, IconCross, ModalBG, Title } from "./ModalGameOver.styled";
import ModalClose from '../assets/icons/cross.svg';
import BGModal from '../assets/pictures/BGModal.png';
import Envelope from "./Envelope";
import { Link } from "react-router-dom";


const ModalGameOver = ({ handleClose }) => {



	return (
		<ModalOverlow onClick={handleClose} >
			<Container>
				<Layer>
					<Wrapper>
						<Link to="/">
							<IconCross src={ModalClose} alt='icon' width="35px"></IconCross>
						</Link>

						<ModalBG src={BGModal} onClick={handleClose} alt='icon' width="35px"></ModalBG>
						<div style={{ zIndex: "45" }}>
							<Info>
								Не получилось!
								Попробуй сыграть снова!
							</Info>
							<div onClick={() => { window.location.reload() }}>
								<Envelope><Title>Играть снова</Title></Envelope>
							</div>
						</div>

					</Wrapper>
				</Layer>
			</Container>
		</ModalOverlow>

	)
}
export default ModalGameOver;