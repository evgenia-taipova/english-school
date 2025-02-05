import PenIcon from "../assets/forwhom/pen.svg";
import PlanetIcon from "../assets/forwhom/planet.svg";
import MedalIcon from "../assets/forwhom/medal.svg";
import BookIcon from "../assets/forwhom/book.svg";

import Photo from "../assets/pic2.png";
import PhotoUnder from "../assets/pic.png";

function HomeTeacher() {
  return (
    <section className="teacher">
      <div className="teacher-main">
        <div className="teacher-header-mobile">
          <h2>Викладач у Nova.School</h2>
          <p className="teacher-header__description">
            Оксана Харченко – <span>English Teacher</span>
          </p>
        </div>
        <div className="teacher-main__image">
          <div className="teacher-main__image-frame">
            <img src={PhotoUnder} alt="" />
          </div>
          <img src={Photo} alt="" className="teacher-main__image-main" />
        </div>
        <div className="teacher-main__text">
          <div className="teacher-header">
            <h2>Викладач у Nova.School</h2>
            <p className="teacher-header__description">
              Оксана Харченко – <span>English Teacher</span>
            </p>
          </div>
          <ul className="teacher-main__list">
            <li className="teacher-main__item">
              <img src={BookIcon} alt="" />
              <div className="teacher-main__desc">
                <div className="teacher-main__header">
                  <img src={BookIcon} alt="" />
                  <h4>20+ років досвіду:</h4>
                </div>

                <ul className="teacher-main__item-list">
                  <li>
                    • Національний університет «Києво-Могилянська академія»
                    (Київ, Україна);
                  </li>
                  <li>• Université Paris-Est Créteil (Париж, Франція);</li>
                  <li>• Мовні курси для студентів різних рівнів;</li>
                  <li>
                    • Організатор та викладач програм корпоративної англійської;
                  </li>
                  <li>• Викладач ESP;</li>
                  <li>• Інструктор з підготовки до міжнародних іспитів;</li>
                </ul>
              </div>
            </li>
            <li className="teacher-main__item">
              <div className="teacher-main__desc">
                <img src={MedalIcon} alt="" />
                <div className="teacher-main__header">
                  <img src={MedalIcon} alt="" />
                  <h4>Міжнародна сертифікація:</h4>
                </div>
                <ul className="teacher-main__item-list">
                  <li>
                    • TKT (Teaching Knowledge Test) для викладачів англійської
                    мови;
                  </li>
                  <li>• Сертифікати: Cambridge, Oxford, Pearson та MOOC.</li>
                </ul>
              </div>
            </li>
            <li className="teacher-main__item">
              <img src={PenIcon} alt="" />
              <div className="teacher-main__desc">
                <div className="teacher-main__header">
                  <img src={PenIcon} alt="" />
                  <h4>Авторка освітніх матеріалів:</h4>
                </div>
                <ul className="teacher-main__item-list">
                  <li>
                    • Розробниця практичних курсів та навчальних програм з
                    англійської мови;
                  </li>
                  <li>• Співавторка підручників для різних спеціалізацій.</li>
                </ul>
              </div>
            </li>
            <li className="teacher-main__item">
              <img src={PlanetIcon} alt="" />
              <div className="teacher-main__desc">
                <div className="teacher-main__header">
                  <img src={PlanetIcon} alt="" />

                  <h4>Міжнародний досвід:</h4>
                </div>
                <ul className="teacher-main__item-list">
                  <li>
                    • Консультант та учасник міжнародного освітнього стартапу
                    (США);
                  </li>
                  <li>• Організаторка освітннього проєкту у Литві;</li>
                  <li>• Учасниця освітніх тренінгів в Європі.</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="course-results__gradient"></div>
    </section>
  );
}
export default HomeTeacher;
