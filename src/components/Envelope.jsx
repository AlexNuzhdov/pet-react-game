import styled from "styled-components"

const Container = styled.div`
margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 81%;
	height: 62px;
	background-color: var(--color-text);
	border: 1px solid var(--color-dark);
	border-radius: 28px;
	cursor: pointer;
	`

const Layer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 98%;
	height: 56px;
	background-color: var(--color-light);
	border: 1px solid var(--color-dark);
	border-radius: 25px;
	`

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 98%;
	height: 50px;
	background-color: var(--color-bg);
	border: 1px solid var(--color-dark);
	border-radius: 22px;
	`

const Envelope = ({ children }) => {

	return (
		<Container>
			<Layer>
				<Wrapper>
					{children}
				</Wrapper>
			</Layer>
		</Container>
	);
}

export default Envelope;