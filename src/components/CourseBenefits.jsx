import { motion } from "framer-motion";

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const CourseBenefits = ({ benefits }) => (
  <div className="course-themes__benefits">
    <h3 className="course-themes__title">Що ви отримаєте на курсі</h3>
    <ul className="course-benefits__list">
      {benefits.map((benefit, i) => (
        <motion.li
          key={i}
          className="course-benefits__item"
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Анимация запускается при 30% видимости
          custom={i}
        >
          – {benefit}
        </motion.li>
      ))}
    </ul>
  </div>
);

export default CourseBenefits;
