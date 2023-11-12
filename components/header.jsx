import Cookies from "js-cookie";

export default function Header() {
  const userId = Cookies.get("Id");

  return (
    <header className="conteiner">
      <div className="main-nav flex jc-sb ai-c">
        <div className="logo">
          <a href="/">Идея</a>
        </div>
        <nav className="flex ai-c">
          {userId !== undefined ? (
            <div className="account flex ai-c">
              <div className="icon-acc"></div>
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
