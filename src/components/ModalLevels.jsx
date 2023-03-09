import { useNavigate } from "react-router-dom";

import { Title, Container, Layer, Wrapper, ModalOverlow, ChekboxContainer, IconCross } from "./ModalLevels.styled";
//импортировать икоку
import cross from "../assets/icons/cross.svg"


const ModalLevels = ({ handleClose }) => {
	const navigate = useNavigate();

	function handleRadioChange(selectedValue) {

		switch (selectedValue) {
			case "6cards":
				navigate("/6cards")
				break;
			case "8cards":
				navigate("/8cards")
				break;
			case "12cards":
				navigate("/12cards")
				break;
			default:
				break;
		}
	}

	return (
		<ModalOverlow>
			<Container>
				<Layer>
					<Wrapper>
						<IconCross src={cross} onClick={handleClose} alt='modal close' width="35px"></IconCross>
						<Title>Выбери сложность:</Title>
						<ChekboxContainer>
							<input
								type="radio"
								id="radio-1"
								name="cards"
								value="6cards"
								onChange={() => handleRadioChange("6cards")}
							/>
							<label  for="radio-1" >Лёгкий</label>
							
						</ChekboxContainer>
						<ChekboxContainer>
							<input
								type="radio"
								id="radio-2"
								name="cards"
								value="8cards"
								onChange={() => handleRadioChange("8cards")}
							/>
							<label  for="radio-2" >Средний</label>
							
						</ChekboxContainer>
						<ChekboxContainer>
							<input
								type="radio"
								id="radio-3"
								name="cards"
								value="12cards"
								onChange={() => handleRadioChange("12cards")}
							/>
							<label  for="radio-3">Сложный</label>
							
						</ChekboxContainer>
					</Wrapper>
				</Layer>
			</Container>
		</ModalOverlow>

	)
}
export default ModalLevels