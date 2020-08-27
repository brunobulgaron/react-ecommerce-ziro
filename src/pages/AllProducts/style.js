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
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
`