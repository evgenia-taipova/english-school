import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieBanner = ({ setCookieConsent }) => {
  return (
    <div className="cookie-banner">
      <p>
        Ми використовуємо файли cookie, щоб надавати вам найактуальнішу
        інформацію. Продовжуючи користуватися сайтом, ви погоджуєтеся на
        використання файлів cookie.
        <Link to="/term-of-use">Політика конфіденційності</Link>
      </p>
      <div className="cookie-banner__btns">
        <button
          onClick={() => {
            localStorage.setItem("cookieConsent", "false");
            setCookieConsent("false");
          }}
          className="decline-btn"
        >
          Відхилити
        </button>
        <button
          onClick={() => {
            localStorage.setItem("cookieConsent", "true");
            setCookieConsent("true");
          }}
          className="button primary cookie"
        >
          Прийняти
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
