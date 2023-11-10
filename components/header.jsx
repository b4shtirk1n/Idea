import Cookies from "js-cookie";

export default function Header() {
  const isLogin = Cookies.get('isLogin')
  console.log(isLogin);

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
