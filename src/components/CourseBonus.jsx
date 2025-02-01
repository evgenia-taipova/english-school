const CourseBonus = ({ description, bonuses }) => (
  <div className="course-bonus">
    <div className="course-bonus__info">
      <h2 className="course-bonus__title">Бонус</h2>
      <p className="course-bonus__description">
        {description}
      </p>
    </div>
    <div className="course-bonus__items">
      {bonuses.map((bonus, index) => (
        <div
          key={index}
          className={`course-bonus__item${bonus.number ? "-number" : ""}`}
        >
          {bonus.number && (
            <span className="course-bonus__number">{bonus.number}</span>
          )}
          <p className="course-bonus__text">{bonus.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CourseBonus;
