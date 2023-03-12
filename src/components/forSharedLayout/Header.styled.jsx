import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  @media (max-width: 390px) {
	 padding-left: 20px;
	 padding-right: 20px;
  }
`
export const Circule = styled.div`
width: 35px;
height: 35px;
border: 1px solid var(--color-dark);
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`
