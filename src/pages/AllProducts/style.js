import styled from 'styled-components';

export const ProductsListText = styled.p `
  font-weight: 300;
  font-size: 2.5rem;
  padding-top: 2rem;
  letter-spacing: .6rem;
  text-align: center;
`

export const ProductsWrapper = styled.div `
  display: grid;
  grid-template-columns: 1fr;

  @media (max-width: 870px) {
    display: flex;
    flex-direction: column;
  }
`

export const CartPreview = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProductsGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1200px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 790px) {
    display: flex;
    flex-direction: column;
  }
`