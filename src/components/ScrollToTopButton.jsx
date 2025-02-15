import { useState, useEffect } from "react";
import ArrowIcon from "../assets/arrow-up.svg";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); // Показывать кнопку после 300px прокрутки
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        <span>Вгору</span>
        <img src={ArrowIcon} alt="" />
      </button>
    )
  );
};

export default ScrollToTopButton;
