import BgRes from "../assets/bg-results.png";
import { motion } from "framer-motion";

const CourseResults = ({ results }) => {
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay },
    },
  });
  return (
    <section className="course-results">
      <motion.h1
        className="course-results__title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn(0)}
      >
        Результати після проходження курсу
      </motion.h1>
      <ul className="course-results__list">
        {results.map(({ title, text }, i) => (
          <motion.li
            key={i}
            className="course-results__item"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn(i * 0.2)} // Задержка для каждого элемента
          >
            <h4>{title}</h4>
            <p>{text}</p>
          </motion.li>
        ))}
      </ul>
      <div className="course-results__gradient"></div>
    </section>
  );
};

export default CourseResults;
