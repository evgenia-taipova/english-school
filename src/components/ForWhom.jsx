import { motion } from "framer-motion";

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.4 }, // Индивидуальная задержка для каждого элемента
  }),
};

const ForWhom = ({ targetGroups }) => {
  return (
    <motion.div
      className="course-description__item"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="course-description__title">Для кого цей курс</h1>
      <ul className="course-description__list">
        {targetGroups.map((group, index) => (
          <motion.li
            key={index}
            className="course-description__list-item"
            variants={slideIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Триггер при 30% видимости
            custom={index}
          >
            <img src={group.icon} alt="" className="course-description__icon" />
            <p className="course-description__text">{group.text}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ForWhom;
