import { useNavigate } from "react-router-dom";
import { Title, Wrapper } from "./ModalLevels.styled";

const ModalLevels = () => {
	const navigate = useNavigate();

	function handleRadioChange(selectedValue) {

		switch (selectedValue) {
			case "6cards":
				navigate("/6cards")
				break;
			case "9cards":
				navigate("/9cards")
				break;
			case "12cards":
				navigate("/12cards")
				break;
			default:
				break;
		}
	}

	return (
		<Wrapper>
			<p>icon</p>
			<Title>Выбери сложность:</Title>
			<label>
				<input
					type="radio"
					name="cards"
					value="6cards"
					onChange={() => handleRadioChange("6cards")}
				/>
				Лёгкий
			</label>
			<label>
				<input
					type="radio"
					name="cards"
					value="9cards"
					onChange={() => handleRadioChange("9cards")}
				/>
				Средний
			</label>
			<label>
				<input
					type="radio"
					name="cards"
					value="12cards"
					onChange={() => handleRadioChange("12cards")}
				/>
				Сложный
			</label>
		</Wrapper>
	)
}
export default ModalLevels