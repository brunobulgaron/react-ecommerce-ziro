import styled from 'styled-components';

export const Product = styled.div `
  display: flex;
  flex-direction: column;
  height: 25rem;
  margin: 2rem;
  border-bottom-color: #fffef5;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  -webkit-box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.75);
  box-shadow: 1px 1px 3px 0px rgba(0,0,0,0.75);
`

export const ProductPicture = styled.img `
  width: 100%;
  height: 90%;
  object-fit: cover;
  
  :hover {
    cursor: pointer;
  }
`

export const ProductInfo = styled.div `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  padding: 1.2rem;
  background-color: #fffef5;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  
  span {
    font-weight: 300;
    color: #999;
  }
`

export const BuyBtn = styled.button `
  display: inline-flex;
  border: none;
  border-radius: 5px;
  background-color: #FFE401;
  padding: 1rem 1.3rem;
  font-weight: 500;
  font-size: .9rem;
  
  i {
    margin-left: .3rem;
  }

  :hover {
    cursor: pointer;
    background-color: #ebe301;
  }
`