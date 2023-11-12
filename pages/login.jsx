import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../Api/axios";
import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();

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
      return navigate("/");
    } catch (err) {
      if (!err.response) {
        console.log("");
      } else {
        console.log("");
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
    <div className="login-form ai-c">
      <div className="login-title">
        <h2>Авторизация</h2>
      </div>
      <div className="form-input flex column">
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
      <div className="login-btn flex jc-c" onClick={handelClick}>
        <a>Войти</a>
      </div>
      <div className="login-btn reg flex jc-c">
        <a href="reg">Регистрация</a>
      </div>
    </div>
  );
}
