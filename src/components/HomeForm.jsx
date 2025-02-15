import TelegramIcon from "../assets/links/telegram.svg";
import WhatsappIcon from "../assets/links/whatsapp.svg";
import QRIcon from "../assets/qr.svg";

import { useState, forwardRef } from "react";
import "react-international-phone/style.css";

import {
  PhoneInput,
  defaultCountries,
  parseCountry,
  buildCountryData,
} from "react-international-phone";

import { allowedCountries } from "../data/countries";

const countries = defaultCountries
  .map(parseCountry)
  .filter(({ iso2 }) => allowedCountries.includes(iso2))
  .map(buildCountryData);

const HomeForm = forwardRef(({ courses }, ref) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  return (
    <section ref={ref} className="form" id="contacts">
      <div className="course-form">
        <div className="course-form__main">
          <div className="course-form__info">
            <h3 className="course-form__title">
              Потрібна консультація щодо навчання?
            </h3>
            <p className="course-form__description course-form__description--desktop">
              Потрібна консультація щодо навчання, або вже обрав та хочеш
              записатися на курс? Заповнюй форму зворотнього зв'язку
            </p>
            <p className="course-form__description course-form__description--mobile">
              Залишайте свої контакти і ми зв’яжемося з вами, щоби допомогти з
              вибором курсу
            </p>
          </div>
          <div className="course-form__links">
            <p>Або зв’яжіться з нами через мессенджери:</p>
            <div className="course-links">
              <img src={QRIcon} alt="" />
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
        </div>
        <form
          action="https://formsubmit.co/taipova.evgenia@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="Нова заявка на курс" />
          <input type="hidden" name="_template" value="table" />
          <div className="form__main">
            <label>
              Ім’я
              <input
                className="form__input"
                name="Name"
                placeholder="Iван"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
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
                countries={countries}
                required
              />
              <input type="hidden" name="Phone" value={phone} />
            </label>
            <label>
              Емейл
              <input
                className="form__input"
                name="Email"
                placeholder="myemail@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Оберіть потрібний курс
              <select
                className="form__input form__input-select"
                name="course"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                required
              >
                {courses.map((course, index) => (
                  <option key={course.id} value={course.title}>
                    {`${String(index + 1).padStart(2, "0")} - ${course.title}`}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button className="form__btn button primary" type="submit">
            Надіслати
          </button>
        </form>
        <div className="form-desc__mobile">
          <p>Або зв’яжіться з нами через мессенджери:</p>
          <div className="course-links__icons__mobile">
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
    </section>
  );
});

export default HomeForm;
