// import { useNavigate } from "react-router-dom";
import { Container, Layer, Wrapper, ModalOverlow, H1, IMGCloseWrapper } from "./ModalPlayPage.styled";
import ModalClose from '../../assets/icons/cross.svg'
//импортировать икоку

const ModaPlay = ({ handleClose }) => {
	// const navigate = useNavigate();



	return (
		<ModalOverlow onClick={handleClose} >
			<Container>
				<Layer>
					<Wrapper>
						<IMGCloseWrapper>
							<img src={ModalClose} onClick={handleClose} alt='modal close' width="35px"></img>
						</IMGCloseWrapper>
						<H1>Щёлкай по квадратикам, запоминай, что под ними изображено, <br /> и находи пары одинаковых картинок.</H1>
					</Wrapper>
				</Layer>
			</Container>
		</ModalOverlow>

	)
}
export default ModaPlay