import "../styles/login.css";

export default function Login() {
  return (
    <div class="login-form ai-c">
      <div class="login-title">
        <h2>Авторизация</h2>
      </div>
      <div class="form-input flex column">
        <input type="text" placeholder="Номер телефона" />
        <input type="password" placeholder="Пароль" />
      </div>
      <div class="login-btn flex jc-c">
        <a href="../../index.html">Войти</a>
      </div>
      <div class="login-btn reg flex jc-c">
        <a href="registr.html">Регистрация</a>
      </div>
    </div>
  );
}
