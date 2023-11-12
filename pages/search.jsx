import "../styles/search.css";

export default function Search() {
  return (
    <main className="conteiner">
      <div className="card-spec flex">
        <div className="photo-spec"></div>
        <div className="info-spec">
          <div className="name-spec">
            <p>Георгий Рудковский</p>
          </div>
          <div className="city">
            <P>Рублевка</P>
          </div>
          <div className="descript">
            <p>
              Сфера деятельности: Ремонт оргтехники, Компьютерный ремонт и
              услуги, Ремонт телефонов, Ремонт аудиотехники и видеотехники,
              Ремонт бытовой техники Установка, парковка, заправка картриджей,
              выезд на дом, wi-fi, оплата картой, восстановление данных, ремонт
              мониторов, выездной ремонт телефонов, ремонт дронов и
              квадрокоптеров, гарантия Способ оплаты: предоплата, постоплата,
              оплата картой, электронными деньгами, банковским переводом,
              наложенным платежом, рассрочка, безналичная, онлайн Марка
              компьютера: Archos, Explay, Digma, Acer, Lenovo, LG, DELL, Compaq,
              Apple, DNS, HP, Fujitsu-Siemens, iRu, Excimer, ASUS, Getac,
              Aquarius, Atary, Eurocom, eMachines, GIGABYTE, HTC, Fujitsu Марка
              мобильного: Samsung, Apple, AWAX, Huawei, LG, Meizu, Sony, ZTE,
              Xiaomi, Honor Ремонт:
            </p>
          </div>
          <div className="btn-contact flex">
            <div className="item">
              <a href="#">Телефон</a>
            </div>
            <div className="item">
              <a href="#">Написать</a>
            </div>
            <div className="item">
              <a href="#">Добавить в список</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
