import { useContext } from "react";
import { IsLoginContext } from "../contexts/isLoginContext";

export default function Header() {
  const { isLogin } = useContext(IsLoginContext)

  return (
    <header class="conteiner">
      <div class="main-nav flex jc-sb ai-c">
        <div class="logo">
          <a href="/">Идея</a>
        </div>
        {isLogin ? (
          <></>
        ) : (
          <nav class="flex ai-c">
            <a href="reg">Зарегистрироваться</a>
            <a href="login">Войти </a>
          </nav>
        )}
      </div>
    </header>
  );
}
