import { motion } from "framer-motion";
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

function CourseHeader({ title, features, description }) {
  return (
    <motion.div
      className="course__info"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1 variants={fadeIn}>{title}</motion.h1>
      <motion.ul variants={fadeIn} className="course__features-list">
        {features.map((item, i) => (
          <li key={i} className="course__feature-item">
            {item}
          </li>
        ))}
      </motion.ul>
      <motion.p className="course__info-description" variants={fadeIn}>
        {description}
      </motion.p>
    </motion.div>
  );
}

export default CourseHeader;
