import logo from "../assets/logo.svg";
import menuBtn from "../assets/menu-btn.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
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
      <button className="header__btn">Розпочати навчання</button>
      <button className="header__menu">
        <img src={menuBtn} alt="" />
      </button>
    </header>
  );
}
export default Header;
