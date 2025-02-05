import CourseSlider from "../components/CourseSlider";
import TopBg from "../components/TopBg";
import backgroundUrl from "../assets/pages-bg/home.png";
import { useScroll } from "../components/ScrollContext";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

function HomeTop() {
  const { formRef } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Запускаем анимацию, когда 30% элемента видно
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
    <section className="home-top" ref={ref}>
      <motion.div
        className="home-header"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Обирай свій курс
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Отримати підвищення, кращий проєкт чи стати впевненішим на співбесідах
          англійською. Ви маєте мету, а ми — рішення, яке допоможе її досягти у
          найшвидший спосіб. <br /> Обирайте практичний інтенсив і розпочинайте
          шлях до змін вже зараз.
        </motion.p>
        <motion.button
          className="header__btn--mobile"
          onClick={() =>
            formRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Розпочати навчання
        </motion.button>
      </motion.div>

      <CourseSlider title="Спеціалізована англійська" category="specialized" />
      <CourseSlider title="Граматика англійської мови" category="grammar" />
      <CourseSlider title="English Speaking Club" category="speaking" />

      <TopBg backgroundUrl={backgroundUrl} top="-135px" />
    </section>
  );
}

export default HomeTop;
