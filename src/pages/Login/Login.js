import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';

import { LoginText, LoginWrapper, CustomLabel, ButtonsWrapper } from "./style";

import firebase from 'firebase';

function Login(props) {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const history = useHistory();

  useEffect(() => {
    if(props.currentUser){
      history.push('/')
    };
  }, [props.currentUser]);

  const onChangeEmail = (event) => {
    setEmailValue(event.target.value);
  };

  const onChangePassword = (event) => {
    setPasswordValue(event.target.value);
  };

  const submitLogin = (event) => {
    event.preventDefault();

    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
      .then((user) => {
        console.log("Logado com sucesso!", user)
      }).catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode);
        console.error(errorMessage);
      });
  };

  return (
    <>
      <LoginText>Login</LoginText>
      <LoginWrapper>
        <form onSubmit={submitLogin}>
          <CustomLabel htmlFor="email">E-mail</CustomLabel>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite o E-mail do Usuário"
            required
            value={emailValue}
            onChange={onChangeEmail}
          />

          <CustomLabel htmlFor="password">Senha</CustomLabel>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite a Senha"
            required
            value={passwordValue}
            onChange={onChangePassword}
          />

          <ButtonsWrapper>
            <input type="submit" value="Entrar" />
          </ButtonsWrapper>

          <p>Não possui uma conta ?</p>
          <Link to="/signup">Cadastre-se</Link>
        </form>
      </LoginWrapper>      
    </>
  )
}

export default Login;