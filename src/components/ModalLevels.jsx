import { useNavigate } from "react-router-dom";
import { Title, Container, Layer, Wrapper, ModalOverlow, Label } from "./ModalLevels.styled";
//импортировать икоку

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
						{/* сюда иконку */}
						<p onClick={handleClose}>icon</p>
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
								onChange={() => handleRadioChange("9cards")}
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
export default ModalLevels