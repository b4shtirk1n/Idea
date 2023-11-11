import { useEffect, useRef, useState } from "react";
import axios from "../Api/axios";
import "../styles/login.css";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const data = JSON.stringify(
    { phone, password },
    {
      headers: { "Content-Type": "Application/json" },
    }
  );

  async function SingIn() {
    try {
      const response = await axios.post("/User/SingIn", data);
      console.log("ok")
    } catch (err) {
      if (!err.response) {
        setErrMsg("");
      } else {
        setErrMsg("");
      }
    }
  }

  async function handelClick(e) {
    e.preventDefault();
    await SingIn();
    setPhone("");
    setPassword("");
  }

  return (
    <div class="login-form ai-c">
      <div class="login-title">
        <h2>Авторизация</h2>
      </div>
      <div class="form-input flex column">
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Номер телефона"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
        />
      </div>
      <div class="login-btn flex jc-c" onClick={handelClick}>
        <a>Войти</a>
      </div>
      <div class="login-btn reg flex jc-c">
        <a href="reg">Регистрация</a>
      </div>
    </div>
  );
}
