import TelegramIcon from "../assets/links/telegram.svg";
import WhatsappIcon from "../assets/links/whatsapp.svg";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

function HomeForm({courses}) {
    const [phone, setPhone] = useState("");
    return (
         <section className="form" style={{ padding: "112px 320px " }}>
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
                        <select
                          className="form__input form__input-select"
                          name="course"
                        >
                          {courses.map((course, index) => (
                            <option key={course.id} value={course.id}>
                              {`${String(index + 1).padStart(2, "0")} - ${
                                course.title
                              }`}
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
              </section>
    )
}

export default HomeForm;