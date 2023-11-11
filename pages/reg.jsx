import "../styles/login.css";

export default function Reg() {
  return (
    <div class="login-form ai-c">
      <div class="login-title">
        <h2>Авторизация</h2>
      </div>
      <div class="form-input flex column">
        <input type="text" placeholder="Имя" />
        <input type="text" placeholder="Почта" />
        <input type="text" placeholder="Номер телефона" />
        <input type="password" placeholder="Пароль" />
      </div>
      <div class="login-btn flex jc-c">
        <a href="reg">Создать</a>
      </div>
      <div class="login-btn reg flex jc-c">
        <a href="login">Войти</a>
      </div>
    </div>
  );
}
