import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { SignUpText, SignUpWrapper, CustomLabel, ButtonsWrapper } from "./style";

function SignUp() {
  // const [signUpForm, setSignUpForm] = useState({});

  return (
    <>
      <SignUpText>Criar Nova Conta</SignUpText>
      <SignUpWrapper>
        <form>
          <CustomLabel htmlFor="user">Usuário</CustomLabel>
          <input
            type="text"
            name="user"
            id="user"
            placeholder="Digite o Nome do Usuário"
            required
            // value={form.user}
            // onChange={handleInputChange}
          />

          <CustomLabel htmlFor="password">Senha</CustomLabel>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite a Senha"
            required
            // value={form.password}
            // onChange={handleInputChange}
          />

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