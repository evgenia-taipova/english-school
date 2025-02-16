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

const CourseForm = forwardRef(({ courseTitle }, ref) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("_subject", "Нова заявка на курс");
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    formData.append("Name", name);
    formData.append("Phone", phone);
    formData.append("Email", email);
    formData.append("Course", courseTitle);

    try {
      const response = await fetch(
        "https://formsubmit.co/novaitschooleu@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setName("");
        setPhone("");
        setEmail("");
      } else {
        setError("Помилка під час відправки. Спробуйте ще раз.");
      }
    } catch (err) {
      setError("Сталася помилка при відправці форми.");
    }
    setLoading(false);
  };

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
          <div className="course-links">
            <img src={QRIcon} alt="" />
            <div className="course-links__icons">
              <a
                href="https://t.me/Nova_Online_School"
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
      <form onSubmit={handleSubmit}>
        <div className="form__main">
          <div></div>
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
                dropdownStyleProps: { className: "form__input-dropdown" },
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
        </div>

        <button className="form__btn button primary" type="submit">
          Надіслати
        </button>
      </form>

      {(loading || isSubmitted) && (
        <div className="modal">
          <div className="modal-content">
            {loading ? (
              <p>Відправляємо...</p>
            ) : (
              <>
                <p>Дякуємо! Ваша заявка успішно відправлена.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="button primary"
                >
                  Закрити
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <div className="form-desc__mobile">
        <p>Або зв’яжіться з нами через мессенджери:</p>
        <div className="course-links__icons__mobile">
          <a
            href="https://t.me/Nova_Online_School"
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
