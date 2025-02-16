import { useEffect, useState } from "react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";
import TermsList from "../components/TermsList";

const translations = {
  en: {
    effectiveDate: "Effective Date: 12/30/2024",
    welcome: "Welcome to Nova School!",
    privacyIntro: `Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data when you use our website, `,
    footerText: [
      "We are committed to resolving your concerns and ensuring the protection of your data.",
      "By using our website, you acknowledge that you have read and understood this Privacy Policy.",
      "Thank you for trusting NovaSchool!",
    ],
  },
  ua: {
    effectiveDate: "Дата набуття чинності: 30.12.2024",
    welcome: "ДОГОВІР ПРО НАДАННЯ ПУБЛІЧНИХ ПОСЛУГ",
    privacyIntro: `Цей Договір визначає умови надання освітніх послуг у сфері вивчення англійської мови (далі – «Послуги»), що надаються онлайн-школою англійської мови «Nova School » (далі – «Виконавець»), фізичним та юридичним особам (далі – «Замовник»)`,

    footerText: [
      "Приймаючи цю Угоду, ви підтверджуєте, що прочитали, зрозуміли і погоджуєтесь з її умовами.",
      "Дякуємо, що обрали Nova Sсhool  для ваших потреб у вивченні англійської для карєри!",
    ],
    buttonToHome: "Повернутись на головну",
    buttonAccept: "Прийняти умови користування",
  },
};

function TermOfUse() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);
  };

  const t = translations[language];
  return (
    <>
      <section className="privacy">
        <LanguageSelector
          language={language}
          setLanguage={handleLanguageChange}
        />
        <div className="privacy__top">
          <div className="privacy__top-header">
            <span>{t.effectiveDate}</span>
            <h4>{t.welcome}</h4>
          </div>
          <div className="privacy__divider"></div>
          <div className="privacy__top-text">{t.privacyIntro}</div>
        </div>
        <TermsList language={language} />
        <div className="terms__footer">
          <div className="privacy__footer">
            {t.footerText.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          <div className="terms__footer-btns">
            <Link to="/" className="button secondary terms">
              {t.buttonToHome}
            </Link>
            <button
              className="button primary terms"
              onClick={() => {
                localStorage.setItem("cookieConsent", "true");
                window.location.reload(); // Перезагрузка страницы для скрытия баннера
              }}
            >
              {t.buttonAccept}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default TermOfUse;
