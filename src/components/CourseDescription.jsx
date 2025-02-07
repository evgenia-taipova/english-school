import { motion } from "framer-motion";

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

function CourseDescription({ description }) {
  return (
    <motion.div
      className="course-description__item"
      variants={slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Запуск при 30% видимости
    >
      <h1 className="course-description__title">Мета курсу</h1>
      <p className="course-description__info">{description}</p>
    </motion.div>
  );
}

export default CourseDescription;
