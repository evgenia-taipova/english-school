import OkIcon from "../assets/okay.svg";
import ImgAdv from "../assets/Home/Component-1/3.svg";
import CourseForm from "../components/CourseForm";
import TelegramIcon from "../assets/links/telegram.svg";
import WhatsappIcon from "../assets/links/whatsapp.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export function Home() {
  return (
    <>
      <section className="home-top">
        <div className="home-header">
          <h1>Обирай свій курс</h1>
          <p>
            Отримати підвищення, кращий проєкт чи стати впевненішим на
            співбесідах англійською. Ви маєте мету, а ми — рішення, яке допоможе
            її досягти у найшвидший спосіб. <br /> Обирайте практичний інтенсив
            і розпочинайте шлях до змін вже зараз.
          </p>
        </div>
        <div className="slider-container">
          <h2>Спеціалізована англійська</h2>
        </div>
      </section>
      <section className="advantages">
        <div className="advantages-inner">
          <div className="advantages-main">
            <div className="advantages-main__text">
              <h2 className="advantages-title">
                Чому нас <span>обирають</span>?
              </h2>
              <ul className="advantages-main__list">
                <li className="advantages-main__item">
                  <img src={OkIcon} alt="" />
                  <div className="advantages-main__item-inner">
                    <h4>Наші викладачі- професіонали.</h4>
                    <p>
                      За їх плечима десятки років викладання і успішної роботи в
                      IT-індустрії та інших галузях. Вони - фахівці, які знають
                      свою справу.
                    </p>
                  </div>
                </li>
                <li className="advantages-main__item">
                  <img src={OkIcon} alt="" />

                  <div className="advantages-main__item-inner">
                    <h4>Зручний формат навчання.</h4>
                    <ul>
                      <p>‍• Заняття у міні групах (6-8 студентів).</p>
                      <p>• Безпосередній контакт з викладачем.</p>
                      <p>
                        • Зручний розклад, щоб не порушувати робочий графік.
                      </p>
                    </ul>
                  </div>
                </li>
                <li className="advantages-main__item">
                  <img src={OkIcon} alt="" />

                  <div className="advantages-main__item-inner">
                    <h4>Курс під потребу.</h4>
                    <p>
                      Наша мета — підготувати вас до реальних викликів у
                      професійній сфері. Від вас — бажання та намір покращити
                      свої навички, від нас — навчання, яке підходить саме вам.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <button className="button secondary">Розпочати навчання</button>
          </div>
          <div className="advantages-img">
            <div className="advantages-img__ellipse"></div>
            <div className="advantages-img__main">
              <div className="advantages-img__inner">
                <img src={ImgAdv} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="advantages-bg">
        <div className="advantages-bg__img"></div>
        <div></div>
      </div> */}
      </section>
      <div className="course-form">
        <div className="course-form__main">
          <div className="course-form__info">
            <h3 className="course-form__title">
              Потрібна консультація щодо навчання?
            </h3>
            <p className="course-form__description">
              Потрібна консультація щодо навчання, або вже обрав та хочеш
              записатися на курс? Заповнюй форму зворотнього зв'язку
            </p>
          </div>
          <div className="course-form__links">
            <p>Або зв’яжіться з нами через мессенджери:</p>
            <div className="course-links__icons">
              <a href="">
                <img src={TelegramIcon} alt="" />
              </a>
              <a href="">
                <img src={WhatsappIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
        <form action="" method="post">
          <div className="form__main">
            <div></div>
            <label>
              Ім’я
              <input className="form__input" name="Name" placeholder="Iван" />
            </label>
            <label>
              Номер телефону
              <div className="phone-input-container">
                <div className="phone-flag"></div>
                <span className="phone-code">+380</span>
                <input
                  type="text"
                  className="phone-input"
                  placeholder="(00)-000-0000"
                />
              </div>
            </label>
            <label>
              Емейл
              <input
                className="form__input"
                name="Email"
                placeholder="myemail@gmail.com"
              />
            </label>
          </div>

          <button className="form__btn" type="submit">
            Надіслати
          </button>
        </form>
      </div>
    </>
  );
}
