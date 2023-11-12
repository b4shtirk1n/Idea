import "../styles/account.css";

export default function Account() {
  return (
    <main>
      <h3 className="conteiner">Профиль</h3>
      <div className="acc-conteiner conteiner flex jc-sb ai-c ">
        <div className="acc-item flex column">
          <div className="number">
            <p>Телефон профиля</p>
            <p>+7 922-550 32 38</p>
          </div>
          <div className="inp-info">
            <input type="text" placeholder="Фамилия" value="Рудковский" />
            <input type="text" placeholder="Имя" value="Гоша" />
          </div>
          <div className="inp-info">
            <input type="text" placeholder="Отчество" value="Александрович" />
            <input type="text" placeholder="Email" value="gera@mail.ru" />
          </div>
          <div className="acc-btn">
            <a href="#">Сохранить изменения</a>
            <a className="del" href="#">
              Удалить аккаунт
            </a>
          </div>
        </div>
        <div className="acc-photo"></div>
      </div>
    </main>
  );
}
