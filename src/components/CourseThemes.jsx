import BgThemes from "../assets/bg-themes.png";

const CourseThemes = ({ themes }) => {
  return (
    <div className="course-themes__main">
      <h3 className="course-themes__title">Основні теми курсу</h3>
      <div className="course-themes__scroll">
        <div className="course-scroll__main">
          <ul className="course-scroll__list">
            {themes.map((theme, index) => (
              <li key={index} className="course-scroll__item">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{theme}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img className="themes-bg" src={BgThemes} alt="" />
    </div>
  );
};

export default CourseThemes;
