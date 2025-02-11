import { useState } from "react";
import PrivacyList from "../components/PrivacyList";
import LanguageSelector from "../components/LanguageSelector";

const translations = {
  en: {
    effectiveDate: "Effective Date: 12/30/2024",
    welcome: "Welcome to Nova School!",
    privacyIntro: `Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data when you use our website, `,
    privacyIntroMore: `, in compliance with the General Data Protection Regulation (GDPR).`,
    contactUs: "Contact Us",
    contactText:
      "If you have questions, concerns, or complaints about this Privacy Policy or how your data is handled, please contact us at:",
    footerText: [
      "We are committed to resolving your concerns and ensuring the protection of your data.",
      "By using our website, you acknowledge that you have read and understood this Privacy Policy.",
      "Thank you for trusting NovaSchool!",
    ],
  },
  ua: {
    effectiveDate: "Дата набуття чинності: 30.12.2024",
    welcome: "Ласкаво просимо до Nova School!",
    privacyIntro: `Ваша конфіденційність важлива для нас. Ця Політика конфіденційності пояснює, як ми збираємо, використовуємо та захищаємо ваші персональні дані під час використання нашого вебсайту `,
    privacyIntroMore: ` відповідно до Загального регламенту про захист даних (GDPR).`,
    contactUs: "Зв'яжіться з нами",
    contactText:
      "Якщо у вас є запитання, зауваження або скарги щодо цієї Політики конфіденційності чи обробки ваших даних, зв’яжіться з нами: ",
    footerText: [
      "Ми прагнемо забезпечити вашу конфіденційність та розглянемо всі ваші запити.",
      "Користуючись нашим вебсайтом, ви підтверджуєте, що прочитали та зрозуміли цю Політику конфіденційності.",
      "Дякуємо, що довіряєте NovaSchool!",
    ],
  },
};

function PrivacyPolicy() {
  const [language, setLanguage] = useState("en");
  const t = translations[language];
  return (
    <>
      <section className="privacy">
        <LanguageSelector language={language} setLanguage={setLanguage}/>
        <div className="privacy__top">
          <div className="privacy__top-header">
            <span>{t.effectiveDate}</span>
            <h4>{t.welcome}</h4>
          </div>
          <div className="privacy__divider"></div>
          <div className="privacy__top-text">
            {t.privacyIntro}
            <a href="/" className="privacy-link">
              www.novaschool.com
            </a>
            {t.privacyIntroMore}
          </div>
        </div>
        <PrivacyList language={language} />
        <div className="privacy__contact">
          <div className="privacy__top-header">
            <h4>{t.contactUs}</h4>
          </div>
          <div className="privacy__divider"></div>
          <p className="privacy__top-text">
            {t.contactText}{" "}
            <a href="mailto:nova.school@gmail.com" className="privacy-link">
              nova.school@gmail.com
            </a>
          </p>
        </div>

        <div className="privacy__footer">
          {t.footerText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
