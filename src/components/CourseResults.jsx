import BgRes from "../assets/bg-results.png";

const CourseResults = ({ results }) => (
    <section className="course-results">
      <h1 className="course-results__title">
        Результати після проходження курсу
      </h1>
      <ul className="course-results__list">
        {results.map(({ title, text }, i) => (
          <li key={i} className="course-results__item">
            <h4>{title}</h4>
            <p>{text}</p>
          </li>
        ))}
      </ul>
      {/* <img className="themes-bg" src={BgRes} alt="" /> */}
    </section>
  );
  
  export default CourseResults;
  