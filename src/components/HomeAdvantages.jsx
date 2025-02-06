import OkIcon from "../assets/okay.svg";
import ImgAdv from "../assets/Home/Component-1/3.svg";
import { useEffect } from "react";

function useScrollAnimation() {
  useEffect(() => {
    const items = document.querySelectorAll(".advantages-main__item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.4 }
    );

    items.forEach((item) => observer.observe(item));

    return () => items.forEach((item) => observer.unobserve(item));
  }, []);
}

function HomeAdvantages() {
  useScrollAnimation();

  return (
    <section className="advantages">
      <div className="advantages-inner">
        <div className="advantages-main">
          <div className="advantages-main__text">
            <h2 className="advantages-title">
              Чому нас <span>обирають</span>?
            </h2>
            <ul className="advantages-main__list">
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
            </ul>
          </div>
          <button className="button secondary">Розпочати навчання</button>
        </div>
        <div className="advantages-img">
          <div className="advantages-img__ellipse"></div>
          <div className="advantages-img__main">
            <div className="advantages-img__inner">
              <img src={ImgAdv} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAdvantages;
