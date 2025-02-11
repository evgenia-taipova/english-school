import TelegramIcon from "../assets/links/telegram.svg";
import WhatsappIcon from "../assets/links/whatsapp.svg";

import { useState, forwardRef } from "react";
import "react-international-phone/style.css";

import {
  PhoneInput,
  defaultCountries,
  parseCountry,
  buildCountryData,
} from "react-international-phone";

const allowedCountries = [
  "us",
  "ca", // США, Канада
  "ua",
  "gb",
  "de",
  "fr",
  "es",
  "it",
  "pl",
  "cz",
  "sk",
  "hu",
  "at",
  "bg",
  "ro",
  "se",
  "no",
  "dk",
  "fi",
  "lt",
  "lv",
  "ee",
  "hr",
  "rs",
  "me",
  "mk",
  "si", // Европа
  "kz", // Казахстан
  "br",
  "ar",
  "cl",
  "co",
  "pe",
  "uy",
  "mx",
  "ec",
  "py",
  "bo", // Южная Америка
];

const countries = defaultCountries
  .map(parseCountry)
  .filter(({ iso2 }) => allowedCountries.includes(iso2))
  .map(buildCountryData);

const CourseForm = forwardRef((props, ref) => {
  const [phone, setPhone] = useState("");

  return (
    <div ref={ref} className="course-form">
      <div className="course-form__main">
        <div className="course-form__info">
          <h3 className="course-form__title">
            Запишіться на курс або поставте запитання!
          </h3>
          <p className="course-form__description">
            Залиште свої контакти, і ми зв’яжемося з вами, щоб допомогти з
            реєстрацією та відповісти на всі ваші запитання.
          </p>
        </div>
        <div className="course-form__links">
          <p>Або зв’яжіться з нами через мессенджери:</p>
          <div className="course-links__icons">
            <a
              href="https://t.me/CareerEnglishHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TelegramIcon} alt="Telegram" />
            </a>
            <a
              href="https://wa.me/message/EUETMN74WSZ2A1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={WhatsappIcon} alt="WhatsApp" />
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
              countries={countries}
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

        <button className="form__btn button primary" type="submit">
          Надіслати
        </button>
      </form>
      <div className="form-desc__mobile">
        <p>Або зв’яжіться з нами через мессенджери:</p>
        <div className="course-links__icons">
          <a
            href="https://t.me/CareerEnglishHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TelegramIcon} alt="Telegram" />
          </a>
          <a
            href="https://wa.me/message/EUETMN74WSZ2A1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={WhatsappIcon} alt="WhatsApp" />
          </a>
        </div>
      </div>
    </div>
  );
});

export default CourseForm;
