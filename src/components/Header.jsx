import logo from "../assets/logo.svg";
import menuBtn from "../assets/menu-btn.svg";
import closeBtn from "../assets/close-btn.svg";
import { Link } from "react-router-dom";
import { useScroll } from "./ScrollContext";
import { useState } from "react";

function Header() {
  const { formRef } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <header>
        <div className="header__main">
          <Link className="header__logo" to="/">
            <img className="header__logo-img" src={logo} alt="" />
          </Link>

          <nav className="header__nav">
            <li className="header__nav-item">
              <a href="#courses">Курси</a>
            </li>
            <li className="header__nav-item">
              <a href="#lecturers">Лектори</a>
            </li>
            <li className="header__nav-item">
              <a href="#about">Про нас</a>
            </li>
            <li className="header__nav-item">
              <a href="#contacts">Контакти</a>
            </li>
          </nav>
        </div>
        <button className="header__btn" onClick={handleScrollToForm}>
          Розпочати навчання
        </button>
        <button className="header__menu" onClick={() => setMenuOpen(true)}>
          <img src={menuBtn} alt="" />
        </button>

        {/* Мобильное меню */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <div className="mobile-menu__header">
            <Link className="header__logo" to="/">
              <img className="header__logo-img" src={logo} alt="" />
            </Link>
            <button
              className="mobile-menu__close"
              onClick={() => setMenuOpen(false)}
            >
              <img src={closeBtn} alt="Close" />
            </button>
          </div>
          <div className="footer_divider"></div>
          <div className="mobile-menu__main">
            <nav className="footer__main-nav">
              <li className="footer__nav-item">
                <a href="#courses" onClick={() => setMenuOpen(false)}>
                  Курси
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#lecturers" onClick={() => setMenuOpen(false)}>
                  Лектори
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  Про нас
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="#contacts" onClick={() => setMenuOpen(false)}>
                  Контакти
                </a>
              </li>
            </nav>
            <div className="mobile-menu__footer">
              <button
                className="header__btn-mobile"
                onClick={() => {
                  setMenuOpen(false);
                  setTimeout(() => {
                    handleScrollToForm();
                  }, 200);
                }}
              >
                Розпочати навчання
              </button>
              <div className="mobile-menu__footer-text">
                <p>© 2024-2025 Nova.School</p>
                <p>All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)}></div>
      )}
    </>
  );
}
export default Header;
