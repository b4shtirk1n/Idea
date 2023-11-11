import { useEffect, useRef, useState } from "react";
import axios from "../Api/axios";
import "../styles/login.css";

export default function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const data = JSON.stringify(
    { email, password },
    {
      headers: { "Content-Type": "Application/json" },
    }
  );

  async function SingIn() {
    try {
      const response = await axios.post("/User/SingIn");
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
    setEmail("");
    setPassword("");
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
      <div class="login-btn flex jc-c" onClick={handelClick}>
        <a>Войти</a>
      </div>
      <div class="login-btn reg flex jc-c">
        <a href="reg">Регистрация</a>
      </div>
    </div>
  );
}
