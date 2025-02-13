import { Link } from "react-router-dom";
import logo from "../assets/logo-big.svg";

function Footer() {
  return (
    <footer>
      <div className="footer__main">
        <a
          className="footer__logo"
          href="https://novas-cool-site-aba215.webflow.io/"
        >
          <img className="footer__logo-img" src={logo} alt="" />
        </a>
        <nav className="footer__main-nav">
          <li className="footer__nav-item">
            <a href="#courses">Курси</a>
          </li>
          <li className="footer__nav-item">
            <a href="#lecturers">Лектори</a>
          </li>
          <li className="footer__nav-item">
            <a href="#about">Про нас</a>
          </li>
          <li className="footer__nav-item">
            <a href="#contacts">Контакти</a>
          </li>
        </nav>
        <div className="footer__main-links">
          <Link to="/privacy-policy">Політика конфіденційності</Link>
          <a href="">Умови обслуговування</a>
        </div>
      </div>
      <div className="footer_divider"></div>
      <span>
        © 2024-2025 Nova.School. Powered by{" "}
        <a href="http://puzzledesire.com" target="_blank">
          Puzzle Desire
        </a>
      </span>
    </footer>
  );
}

export default Footer;
