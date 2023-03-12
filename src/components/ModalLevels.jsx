import { useNavigate } from "react-router-dom";
import { Title, Container, Layer, Wrapper, ModalOverlow, Label, IconCross } from "./ModalLevels.styled";
import cross from "../assets/icons/cross.svg";

const ModalLevels = ({ handleClose }) => {
	const navigate = useNavigate();
	const handleNavigate = (value) => {
		setTimeout(() => {
			navigate(value)
		}, 500);
	}
	function handleRadioChange(selectedValue) {

		switch (selectedValue) {
			case "6cards":
				handleNavigate(selectedValue)
				break;
			case "8cards":
				handleNavigate(selectedValue)
				break;
			case "12cards":
				handleNavigate(selectedValue)
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
						<Label>
							<input
								type="radio"
								name="cards"
								value="6cards"
								onChange={() => handleRadioChange("6cards")}
							/>
							Лёгкий
						</Label>
						<Label>
							<input
								type="radio"
								name="cards"
								value="8cards"
								onChange={() => handleRadioChange("8cards")}
							/>
							Средний
						</Label>
						<Label>
							<input
								type="radio"
								name="cards"
								value="12cards"
								onChange={() => handleRadioChange("12cards")}
							/>
							Сложный
						</Label>
					</Wrapper>
				</Layer>
			</Container>
		</ModalOverlow>
	)
}
export default ModalLevels;