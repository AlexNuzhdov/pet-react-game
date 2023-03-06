import styled from 'styled-components'

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1280px) {
	display:none;
}"
`

export const BurgerBar = styled.div`
  width: 30px;
  height: 3px;
  background-color: #333;
  margin: 4px 0;
  transition: transform 0.2s ease;
`
export const ContainerHeader = styled.div`
  padding-left: var(--fs-sm);
  padding-right: var(--fs-sm);
  padding-top: 20px;
  @media (max-width: 760px) {
    padding-top: 24px;	
	 padding-left: var(--fs-xl);
	 padding-right: var(--fs-xl);
  }
  @media (max-width: 320px) {
    padding-top: 16px;
	 padding-left: var(--fs-md);
	 padding-right: var(--fs-md);
  }
`

