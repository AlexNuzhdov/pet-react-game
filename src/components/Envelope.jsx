import styled from "styled-components"

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 81%;
	height: 62px;
	background-color: var(--color-text);
	border: 1px solid var(--color-dark);
	border-radius: 28px;
	`

const Layer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 98%;
	height: 56px;
	background-color: var(--color-light);
	border: 1px solid var(--color-dark);
	border-radius: 26px;
	`

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	aligh-items: center;
	width: 98%;
	height: 50px;
	background-color: var(--color-bg);
	border: 1px solid var(--color-dark);
	border-radius: 27px;
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