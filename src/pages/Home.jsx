import OkIcon from "../assets/okay.svg";
import ImgAdv from "../assets/Home/Component-1/3.svg";
import TelegramIcon from "../assets/links/telegram.svg";
import WhatsappIcon from "../assets/links/whatsapp.svg";

import TopBg from "../components/TopBg";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Home() {
  const [phone, setPhone] = useState("");
  const courses = [
    {
      id: 1,
      title: "English for IT",
      description:
        "Перетворіть англійську на інструмент для досягнення кар’єрних цілей завдяки онлайн- курсу для IT-спеціалістів.",
    },
    {
      id: 2,
      title: "English for Business",
      description:
        "Опануйте ділову англійську, щоб впевнено спілкуватися з партнерами, вести переговори та досягати нових вершин у бізнесі.",
    },
    {
      id: 3,
      title: "English for Business",
      description:
        "Опануйте ділову англійську, щоб впевнено спілкуватися з партнерами, вести переговори та досягати нових вершин у бізнесі.",
    },
    {
      id: 4,
      title: "English for Business",
      description:
        "Опануйте ділову англійську, щоб впевнено спілкуватися з партнерами, вести переговори та досягати нових вершин у бізнесі.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  };
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
          <Slider {...settings}>
            {courses.map((course) => (
              <div key={course.id} className="slide">
                <div className="slide-content">
                  <span>{`0${course.id}`}</span>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>
                {/* <button><img src={} alt="" /></button> */}
              </div>
            ))}
          </Slider>
        </div>

        <TopBg />
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
              <PhoneInput
                defaultCountry="ua"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                className="form__input"
                style={{ padding: "7px 20px" }}
                inputClassName="form__input-phone"
                countrySelectorStyleProps={{
                  className: "form__input-country",
                  buttonClassName: "form__input-country",
                  buttonContentWrapperClassName: "form__input-country",
                  dropdownStyleProps: { className: "form__input-dropdown" },
                }}
              />
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
