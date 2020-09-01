import React from 'react'
import { Link } from 'react-router-dom';

import { LoginText, LoginWrapper, CustomLabel, ButtonsWrapper } from "./style";

function Login() {
  return (
    <>
      <LoginText>Login</LoginText>
      <LoginWrapper>
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