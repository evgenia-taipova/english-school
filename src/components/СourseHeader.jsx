function CourseHeader({title, features, description}) {
  return (
    <div className="course__info">
      <h1>{title}</h1>
      <ul className="course__features-list">
        {features.map(
          (item, i) => (
            <li key={i} className="course__feature-item">
              {item}
            </li>
          )
        )}
      </ul>
      <p className="course__info-description">
        {description}
      </p>
    </div>
  );
}

export default CourseHeader;
