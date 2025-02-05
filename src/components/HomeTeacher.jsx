import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import PenIcon from "../assets/forwhom/pen.svg";
import PlanetIcon from "../assets/forwhom/planet.svg";
import MedalIcon from "../assets/forwhom/medal.svg";
import BookIcon from "../assets/forwhom/book.svg";
import Photo from "../assets/pic2.png";
import PhotoUnder from "../assets/pic.png";

function HomeTeacher() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Запускаем анимацию, когда 30% элемента в зоне видимости
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="teacher" ref={ref}>
      <div className="teacher-main">
        <div className="teacher-header-mobile">
          <h2>Викладач у Nova.School</h2>
          <p className="teacher-header__description">
            Оксана Харченко – <span>English Teacher</span>
          </p>
        </div>
        <motion.div
          className="teacher-main__image"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="teacher-main__image-frame"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={PhotoUnder} alt="" />
          </motion.div>
          <motion.img
            src={Photo}
            alt=""
            className="teacher-main__image-main"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>
        <div className="teacher-main__text">
          <div className="teacher-header">
            <h2>Викладач у Nova.School</h2>
            <p className="teacher-header__description">
              Оксана Харченко – <span>English Teacher</span>
            </p>
          </div>
          <ul className="teacher-main__list">
            {[
              {
                icon: BookIcon,
                title: "20+ років досвіду:",
                items: [
                  "Національний університет «Києво-Могилянська академія» (Київ, Україна);",
                  "Université Paris-Est Créteil (Париж, Франція);",
                  "Мовні курси для студентів різних рівнів;",
                  "Організатор та викладач програм корпоративної англійської;",
                  "Викладач ESP;",
                  "Інструктор з підготовки до міжнародних іспитів;",
                ],
              },
              {
                icon: MedalIcon,
                title: "Міжнародна сертифікація:",
                items: [
                  "TKT (Teaching Knowledge Test) для викладачів англійської мови;",
                  "Сертифікати: Cambridge, Oxford, Pearson та MOOC.",
                ],
              },
              {
                icon: PenIcon,
                title: "Авторка освітніх матеріалів:",
                items: [
                  "Розробниця практичних курсів та навчальних програм з англійської мови;",
                  "Співавторка підручників для різних спеціалізацій.",
                ],
              },
              {
                icon: PlanetIcon,
                title: "Міжнародний досвід:",
                items: [
                  "Консультант та учасник міжнародного освітнього стартапу (США);",
                  "Організаторка освітннього проєкту у Литві;",
                  "Учасниця освітніх тренінгів в Європі.",
                ],
              },
            ].map((item, index) => (
              <li key={index} className="teacher-main__item">
                <img src={item.icon} alt="" />
                <div className="teacher-main__desc">
                  <div className="teacher-main__header">
                    <img src={item.icon} alt="" />
                    <h4>{item.title}</h4>
                  </div>
                  <ul className="teacher-main__item-list">
                    {item.items.map((text, i) => (
                      <li key={i}>• {text}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="course-results__gradient"></div>
    </section>
  );
}

export default HomeTeacher;
