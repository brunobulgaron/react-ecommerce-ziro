import styled from 'styled-components';

export const NewProductWrapper = styled.div `
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

  form {
    display: flex;
    flex-direction: column;
    padding: 5rem;
    text-transform: uppercase;

    p {
      text-transform: initial;
      font-size: .8rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      margin-right: 60.5%;
      opacity: .5;
    }
  }

  @media (max-width: 800px) {
    width: 100vw;
  }

  input[type=text],
  input[type=number] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

  input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: #45a049;
  }

  
`

export const NewProductText = styled.p `
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

export const CustomLabel = styled.label `
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: .7rem 0;
`

export const ButtonsWrapper = styled.div `
  display: flex;
  flex-direction: column;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    font-weight: 500;
  }
`