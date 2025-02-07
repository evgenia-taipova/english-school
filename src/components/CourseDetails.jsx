import { motion } from "framer-motion";
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  },
});

const CourseDetails = ({ details }) => {
  return (
    <motion.ul
      className="course__details-list"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn(0)}
    >
      {details.map((detail, index) => (
        <li key={index} className="course__detail-item">
          <img src={detail.icon} alt="" />
          <span>{detail.text}</span>
        </li>
      ))}
    </motion.ul>
  );
};

export default CourseDetails;
