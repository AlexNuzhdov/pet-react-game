import { Container, Layer, Wrapper, ModalOverlow, Text, IMGCloseWrapper } from "./ModalPlayPage.styled";
import ModalClose from "../../assets/icons/cross.svg";


const ModaPlay = ({ handleClose }) => {

	return (
		<ModalOverlow onClick={handleClose} >
			<Container>
				<Layer>
					<Wrapper>
						<IMGCloseWrapper>
							<img src={ModalClose} onClick={handleClose} alt="close" width="35px"></img>
						</IMGCloseWrapper>
						<Text>Щёлкай по квадратикам, запоминай, что под ними изображено, <br /> и находи пары одинаковых картинок.</Text>
					</Wrapper>
				</Layer>
			</Container>
		</ModalOverlow>
	)
}
export default ModaPlay;