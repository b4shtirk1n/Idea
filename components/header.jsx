import Cookies from "js-cookie";

export default function Header() {
  const userId = Cookies.get("Id");

  return (
    <header class="conteiner">
      <div class="main-nav flex jc-sb ai-c">
        <div class="logo">
          <a href="#">Идея</a>
        </div>
        <nav class="flex ai-c">
          {userId !== undefined ? (
            <div class="account flex ai-c">
              <div class="icon-acc"></div>
              <a href="assent/page/account.html">Гоша Рудковский</a>
            </div>
          ) : (
            <>
              <a href="reg">Зарегистрироваться</a>
              <a href="login">Войти</a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
