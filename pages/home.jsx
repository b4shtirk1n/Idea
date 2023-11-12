export default function Home() {
  return (
    <>
      <main>
        <section id="info" className="conteiner">
          <div className="main-info">
            <div className="title">
              <h1>
                Дела исполняются <br />
                <span></span>с Идеи
              </h1>
              <p>Главное это верить нам</p>
            </div>
          </div>

          <div className="search flex jc-sb">
            <input type="text" placeholder="Услуга или специалист" />
            <div className="search-btn flex ai-c">
              <a href="assent/page/search.html">Искать</a>
            </div>
          </div>
          <div className="item-search flex">
            <div className="item">
              <a href="#">Курьер</a>
            </div>
            <div className="item">
              <a href="#">Верстальщик</a>
            </div>
            <div className="item">
              <a href="#">Сантехник</a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-conteiner conteiner">
          <div className="logo">
            <a className="logo-foot">
              Идея
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
