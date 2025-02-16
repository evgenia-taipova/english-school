import { useEffect, useState } from "react";
import LanguageSelector from "../components/LanguageSelector";
import { Link } from "react-router-dom";
import TermsList from "../components/TermsList";

const translations = {
  en: {
    effectiveDate: "Date of entry into force: 12/30/2024",
    welcome: "Public Services Agreement",
    privacyIntro: `This Agreement defines the conditions for providing educational services in the field of English language learning (hereinafter referred to as "Services") provided by the online school of English "Nova School" (hereinafter referred to as "Contractor"), individuals and legal entities (hereinafter-"Customer")`,
    footerText: [
      "By accepting this agreement, you confirm that you have read, understand and agree to its terms.",
      "Thank you that you have chosen Nova Shool for your English learning needs for your career!",
    ],
    buttonToHome: "Return to the Home Page",
    buttonAccept: "Accept the terms & conditions",
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

function TermOfUse({setCookieConsent}) {
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
            <Link
              className="button primary terms"
              onClick={() => {
                localStorage.setItem("cookieConsent", "true");
                setCookieConsent("true"); // Скрываем CookieBanner без перезагрузки
              }}
              to="/"
            >
              {t.buttonAccept}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default TermOfUse;
