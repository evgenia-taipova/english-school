import OkIcon from "../assets/okay.svg";
import ImgAdv from "../assets/Home/Component-1/3.svg";
import TelegramIcon from "../assets/links/telegram.svg";
import WhatsappIcon from "../assets/links/whatsapp.svg";
import BgImage from "../assets/pages-bg/home.png";
import TopBg from "../components/TopBg";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowIcon from "../assets/arrow.svg";
import ArrowNextIcon from "../assets/arrow-next.svg";
import ArrowPrevIcon from "../assets/arrow-prev.svg";

import englishForIt from "../assets/pages-bg/english-for-it.png";
import englishForBusiness from "../assets/pages-bg/english-for-business.png";

const NextArrow = ({ onClick }) => (
  <button className="custom-arrow next" onClick={onClick}>
    <img src={ArrowNextIcon} alt="Next" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="custom-arrow prev" onClick={onClick}>
    <img src={ArrowPrevIcon} alt="Previous" />
  </button>
);

export function Home() {
  const [phone, setPhone] = useState("");
  const courses = [
    {
      id: 1,
      title: "English for IT",
      category: "specialized",
      description:
        "Перетворіть англійську на інструмент для досягнення кар’єрних цілей завдяки онлайн- курсу для IT-спеціалістів.",
      image: englishForIt,
    },
    {
      id: 2,
      title: "English for Business",
      category: "specialized",
      description:
        "Опануйте ділову англійську, щоб впевнено спілкуватися з партнерами, вести переговори та досягати нових вершин у бізнесі.",
      image: englishForBusiness,
    },
    {
      id: 3,
      title: "English for NGOs",
      category: "specialized",
      description:
        "Опануйте англійську для ефективної роботи у громадських організаціях, захисту прав людини та підтримки демократії.",
      image: "/src/assets/pages-bg/english-for-ngos.png",
    },
    {
      id: 4,
      title: "English for Media Literacy",
      category: "specialized",
      description:
        "Дізнайтеся, як англійська допомагає орієнтуватися у сучасному світі медіа, критично оцінювати інформацію та розпізнавати маніпуляції.",
      image: "../assets/pages-bg/english-for-media.png",
    },
    {
      id: 5,
      title: "English for Law",
      category: "specialized",
      description:
        "Оволодійте англійською для юридичної сфери завдяки курсу, що зосереджується на правовій лексиці та практичних навичках.",
      image: "../assets/pages-bg/english-for-law.png",
    },

    {
      id: 6,
      title: "English Grammar A2",
      category: "grammar",
      description:
        "Покращуйте граматику англійської мови на рівні A2 за допомогою курсу для закріплення основних правил і структури мови.",
      image: "../assets/pages-bg/english-grammar-a2.png",
    },

    {
      id: 7,
      title: "English Grammar B1+",
      category: "grammar",
      description:
        "Поглиблюйте знання граматики англійської мови на рівні B1+ і вдосконалюйте навички використання мови.",
      image: "../assets/pages-bg/english-grammar-b1.png",
    },
    {
      id: 8,
      title: "English Speaking Club (A2 Level)",
      category: "speaking",
      description:
        "Відбувається раз на тиждень! Розмовний клуб англійської мови - це ідеальне місце для тих, хто хоче покращити свою розмовну англійську, позбутися мовного бар'єру та навчитися вільно висловлювати свої думки в повсякденних і професійних ситуаціях.",
      image: "../assets/pages-bg/english-speaking-a2.png",
    },
    {
      id: 9,
      title: "English Speaking Club (B1+ Level)",
      category: "speaking",
      description:
        "Відбувається раз на тиждень! Розмовний клуб англійської мови - це ідеальне місце для тих, хто хоче покращити свою розмовну англійську, позбутися мовного бар'єру та навчитися вільно висловлювати свої думки в повсякденних і професійних ситуаціях.",
      image: "../assets/pages-bg/english-speaking-b1.png",
    },

    {
      id: 10,
      title: "English Speaking Club (B1+ Level, Business English)",
      category: "speaking",
      description:
        "Відбувається раз на тиждень! Розмовний клуб англійської мови - це ідеальне місце для тих, хто хоче покращити свою розмовну англійську, позбутися мовного бар'єру та навчитися вільно висловлювати свої думки в повсякденних і професійних ситуаціях.",
      image: "../assets/pages-bg/english-speaking-business.png",
    },
    {
      id: 11,
      title: "IT Professionals Speaking Club",
      category: "speaking",
      description:
        "Відбувається раз на тиждень! Розмовний клуб англійської мови - це ідеальне місце для тих, хто хоче покращити свою розмовну англійську, позбутися мовного бар'єру та навчитися вільно висловлювати свої думки в повсякденних і професійних ситуаціях.",
      image: "../assets/pages-bg/english-speaking-it.png",
    },
  ];
  const settings = (slidesCount) => ({
    className: "slider variable-width",
    dots: slidesCount > 2,
    infinite: slidesCount > 2,
    speed: 500,
    slidesToShow: Math.min(slidesCount, 2),
    slidesToScroll: 1,
    nextArrow: slidesCount > 2 ? <NextArrow /> : null,
    prevArrow: slidesCount > 2 ? <PrevArrow /> : null,
    customPaging: () => <div className="custom-dot" />,
    dotsClass: "slick-dots custom-dots",
  });

  const backgroundImage = "src/assets/pages-bg/english-for-law.png";

  const CourseSlider = ({ title, category }) => {
    const filteredCourses = courses.filter(
      (course) => course.category === category
    );
    return (
      <div className="slider-container">
        <h2>{title}</h2>
        <Slider {...settings(filteredCourses.length)}>
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="slide"
    
            >
              <div
                className="slide-content"
                style={course.id === 7 ? { paddingRight: "60px" } : {}}
              >
                <span>{`0${course.id}`}</span>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
              <button>
                <img src={ArrowIcon} alt="" />
              </button>
            </div>
          ))}
        </Slider>
      </div>
    );
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
        <CourseSlider
          title="Спеціалізована англійська"
          category="specialized"
        />

        <CourseSlider title="Граматика англійської мови" category="grammar" />
        <CourseSlider title="English Speaking Club" category="speaking" />

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
                  dropdownStyleProps: {
                    className: "form__input-dropdown",
                  },
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
            <label>
              Оберіть потрібний курс
              <select className="form__input form__input-select" name="course">
                {courses.map((course, index) => (
                  <option key={course.id} value={course.id}>
                    {`${String(index + 1).padStart(2, "0")} - ${course.title}`}
                  </option>
                ))}
              </select>
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
