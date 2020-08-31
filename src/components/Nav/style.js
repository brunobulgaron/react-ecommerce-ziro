import styled from 'styled-components';

export const HeaderWrapper = styled.div `
  max-width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  background-color: #ffe401;
`

export const Logo = styled.h1 `
  font-size: 1.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  
  :hover {
    cursor: pointer;
  }
`

export const HeaderUl = styled.ul `
  list-style: none;
  display: flex;
  align-items: center;
`

export const HeaderLi = styled.li `
  font-weight: 500;
  letter-spacing: 1px;
  padding: 1.5rem 1rem;
  transition: .2s;

  a {
    text-decoration: none;
    color: inherit;
  }
  
  i {
    margin-right: .3rem;
  }
  
  :hover {
    cursor: pointer;
    background-color: #f7dd00;
  }
`