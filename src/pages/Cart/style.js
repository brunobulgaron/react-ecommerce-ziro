import styled from 'styled-components';

export const CartWrapper = styled.div `
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100%;
  margin: auto;
  border-bottom-color: #fffef5;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  -webkit-box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.75);
  box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.75);

  @media (max-width: 800px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
`

export const CartText = styled.p `
  font-weight: 300;
  font-size: 2.5rem;
  padding: 2rem 0;
  letter-spacing: .2rem;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.5rem;
    letter-spacing: initial;
  }
`

export const EmptyCartText = styled.p `
  font-size: 1.5rem;
  padding-top: 2rem;
  text-align: center;
  color: #999;
`

export const BagIcon = styled.i `
  padding-top: 8rem;
  font-size: 10rem;
  opacity: .1;
`

export const CustomUL = styled.ul `
  list-style: none;
  padding: 5rem;
`

export const CustomLi = styled.li `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5rem;
  width: 100%;

  span {
    margin: 0 3rem;
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const CheckoutWrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: .5rem .5rem 0 .5rem;
  }
`

export const RemoveBtn = styled.button `
  background-color: #FF6501;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  font-weight: 500;

  i {
    color: #fff;
    font-size: 1rem;
  }

  :hover {
    cursor: pointer;    
    background-color: #ce5100;
  }
`

export const ClearCartBtn = styled.button `
  background-color: #999;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  font-weight: 500;

  i {
    color: #fff;
    font-size: 1rem;
  }

  :hover {
    cursor: pointer;    
    background-color: #555;
  }
`

export const CheckoutBtn = styled.button `
  width: 10rem;
  background-color: #4CAF50;
  color: #fff;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  font-weight: 500;

  :hover {
    cursor: pointer;
    background-color: #3e9042;
  }
`