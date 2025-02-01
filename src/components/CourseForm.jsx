import TelegramIcon from "../assets/links/telegram.svg";
import WhatsappIcon from "../assets/links/whatsapp.svg";

const CourseForm = () => (
  <div className="course-form">
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
);

export default CourseForm;
