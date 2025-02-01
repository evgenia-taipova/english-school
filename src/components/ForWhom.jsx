const ForWhom = ({ targetGroups }) => {
  return (
    <div className="course-description__item">
      <h1 className="course-description__title">Для кого цей курс</h1>
      <ul className="course-description__list">
        {targetGroups.map((group, index) => (
          <li key={index} className="course-description__list-item">
            <img src={group.icon} alt="" className="course-description__icon" />
            <p className="course-description__text">{group.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForWhom;
