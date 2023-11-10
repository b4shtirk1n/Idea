import { useContext, useState } from "react";
import { IsLoginContext } from "../contexts/isLoginContext";
import "../styles/login.css";

export default function Login() {
  const { setIsLogin } = useContext(IsLoginContext);

  function handleClick() {
    setIsLogin(true);
  }

  return (
    <div class="login-form ai-c">
      <div class="login-title">
        <h2>Авторизация</h2>
      </div>
      <div class="form-input flex column">
        <input type="text" placeholder="Номер телефона" />
        <input type="password" placeholder="Пароль" />
      </div>
      <div class="login-btn flex jc-c" onMouseDown={handleClick}>
        <a href="/">Войти</a>
      </div>
      <div class="login-btn reg flex jc-c">
        <a href="reg">Регистрация</a>
      </div>
    </div>
  );
}
