function CourseDescription({description}) {
  return (
    <div className="course-description__item">
      <h1 className="course-description__title">Мета курсу</h1>
      <p className="course-description__info">
        {description}
      </p>
    </div>
  );
}

export default CourseDescription;
