export default function Home() {
  return (
    <>
      <main>
        <section id="info" class="conteiner">
          <div class="main-info">
            <div class="title">
              <h1>
                Дела исполняются <br />
                <span></span>с Идеи
              </h1>
              <p>Главное это верить нам</p>
            </div>
          </div>

          <div class="search flex jc-sb">
            <input type="text" placeholder="Услуга или специалист" />
            <div class="search-btn flex ai-c">
              <a href="assent/page/search.html">Искать</a>
            </div>
          </div>
          <div class="item-search flex">
            <div class="item">
              <a href="#">Курьер</a>
            </div>
            <div class="item">
              <a href="#">Верстальщик</a>
            </div>
            <div class="item">
              <a href="#">Сантехник</a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div class="footer-conteiner conteiner">
          <div class="logo">
            <a href="#" class="logo-foot">
              Идея
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
