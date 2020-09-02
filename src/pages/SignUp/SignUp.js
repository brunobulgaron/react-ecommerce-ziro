import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase';

import { SignUpText, SignUpWrapper, CustomLabel, ButtonsWrapper } from "./style";

function SignUp(props) {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const history = useHistory();
  
  useEffect(() => {
    if(props.currentUser){
      history.push('/');
    };
  }, [props.currentUser]);
  
  const onChangeEmail = (event) => {
    setEmailValue(event.target.value);
  };
  
  const onChangePassword = (event) => {
    setPasswordValue(event.target.value);
  };

  const submitSignUp = (event) => {
    event.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
      .then((credential) => {
        alert("Usuário cadastrado com sucesso!");
        return firebase.firestore().collection('users').doc(credential.user.uid).set({
          email: emailValue
        })
      }).catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode);
        console.error(errorMessage);
      });
  };

  return (
    <>
      <SignUpText>Criar Nova Conta</SignUpText>
      <SignUpWrapper>
        <form onSubmit={submitSignUp}>
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
            minLength="6"
            required
            value={passwordValue}
            onChange={onChangePassword}
          />

          <p>Sua senha deve possuir no mínimo 6 caracteres.</p>

          <ButtonsWrapper>
            <input type="submit" value="Cadastrar" />
          </ButtonsWrapper>
          
          <p>Já tem uma conta ?</p>
          <Link to="/login">Entrar</Link>
        </form>
      </SignUpWrapper>      
    </>
  )
}

export default SignUp;