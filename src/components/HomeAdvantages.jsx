import OkIcon from "../assets/okay.svg";
import ImgAdv from "../assets/Home/Component-1/3.svg";
import { motion } from "framer-motion";

function HomeAdvantages() {
  const fadeInUp = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const fadeInList = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };
  return (
    <section className="advantages">
      <div className="advantages-inner">
        <div className="advantages-main">
          <div className="advantages-main__text">
            <motion.h2
              className="advantages-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              Чому нас <span>обирають</span>?
            </motion.h2>

            <motion.ul
              className="advantages-main__list"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInList}
            >
              <li className="advantages-main__item">
                <img src={OkIcon} alt="" />
                <div className="advantages-main__item-inner">
                  <h4>Наші викладачі- професіонали.</h4>
                  <p>
                    За їх плечима десятки років викладання і успішної роботи в
                    IT-індустрії та інших галузях. Вони - фахівці, які знають
                    свою справу.
                  </p>
                </div>
              </li>
              <li className="advantages-main__item">
                <img src={OkIcon} alt="" />

                <div className="advantages-main__item-inner">
                  <h4>Зручний формат навчання.</h4>
                  <ul>
                    <p>‍• Заняття у міні групах (6-8 студентів).</p>
                    <p>• Безпосередній контакт з викладачем.</p>
                    <p>• Зручний розклад, щоб не порушувати робочий графік.</p>
                  </ul>
                </div>
              </li>
              <li className="advantages-main__item">
                <img src={OkIcon} alt="" />

                <div className="advantages-main__item-inner">
                  <h4>Курс під потребу.</h4>
                  <p>
                    Наша мета — підготувати вас до реальних викликів у
                    професійній сфері. Від вас — бажання та намір покращити свої
                    навички, від нас — навчання, яке підходить саме вам.
                  </p>
                </div>
              </li>
            </motion.ul>
          </div>

          <motion.button
            className="button secondary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            Розпочати навчання
          </motion.button>
        </div>
        <motion.div
          className="advantages-img"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeInScale}
        >
          <div className="advantages-img__ellipse"></div>
          <div className="advantages-img__main">
            <div className="advantages-img__inner">
              <img src={ImgAdv} alt="" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeAdvantages;
