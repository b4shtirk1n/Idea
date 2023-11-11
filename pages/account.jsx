import "../styles/account.css";

export default function Account() {
  return (
    <main>
      <h3 class="conteiner">Профиль</h3>
      <div class="acc-conteiner conteiner flex jc-sb ai-c ">
        <div class="acc-item flex column">
          <div class="number">
            <p>Телефон профиля</p>
            <p>+7 922-550 32 38</p>
          </div>
          <div class="inp-info">
            <input type="text" placeholder="Фамилия" value="Рудковский" />
            <input type="text" placeholder="Имя" value="Гоша" />
          </div>
          <div class="inp-info">
            <input type="text" placeholder="Отчество" value="Александрович" />
            <input type="text" placeholder="Email" value="gera@mail.ru" />
          </div>
          <div class="acc-btn">
            <a href="#">Сохранить изменения</a>
            <a class="del" href="#">
              Удалить аккаунт
            </a>
          </div>
        </div>
        <div class="acc-photo"></div>
      </div>
    </main>
  );
}
