import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="cookie-banner">
      <p>
        Ми використовуємо файли cookie, щоб надавати вам найактуальнішу
        інформацію. Продовжуючи користуватися сайтом, ви погоджуєтеся на
        використання файлів cookie.
        <Link to="/term-of-use">Політика конфіденційності</Link>
      </p>
      <div className="cookie-banner__btns">
        <button onClick={handleDecline} className="decline-btn">
          Відхилити
        </button>
        <button onClick={handleAccept} className="button primary cookie">
          Прийняти
        </button>
      </div>
    </div>
  ) : null;
};

export default CookieBanner;
