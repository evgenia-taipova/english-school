import CourseSlider from "../components/CourseSlider";
import TopBg from "../components/TopBg";
import backgroundUrl from "../assets/pages-bg/home.png";

function HomeTop() {
  return (
    <section className="home-top">
      <div className="home-header">
        <h1>Обирай свій курс</h1>
        <p>
          Отримати підвищення, кращий проєкт чи стати впевненішим на співбесідах
          англійською. Ви маєте мету, а ми — рішення, яке допоможе її досягти у
          найшвидший спосіб. <br /> Обирайте практичний інтенсив і розпочинайте
          шлях до змін вже зараз.
        </p>
      </div>
      <CourseSlider title="Спеціалізована англійська" category="specialized" />

      <CourseSlider title="Граматика англійської мови" category="grammar" />
      <CourseSlider title="English Speaking Club" category="speaking" />

      <TopBg backgroundUrl={backgroundUrl} top="-135px" />
    </section>
  );
}

export default HomeTop;
