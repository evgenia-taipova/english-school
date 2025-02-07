import { useState } from "react";

const CourseTopics = ({ topics, version }) => {
  const [showAll, setShowAll] = useState(false);
  const descriptionClass =
    version === "v2"
      ? "course-topic__description-v2"
      : "course-topic__description";
  const sliceNumber = version === "v2" ? 5 : 3;
  return (
    <div className="course-topic__info">
      <ul className="course-topic__list">
        {(showAll ? topics : topics.slice(0, sliceNumber)).map((topic) => (
          <li
            key={topic.id}
            className={`course-topic__item ${version === "v2" ? "v2" : ""}`}
          >
            <span>{topic.id < 10 ? `0${topic.id}` : topic.id}</span>
            <div className={descriptionClass}>
              <h4>{version === "v2" ? "Тема" : topic.title}</h4>
              <p>{topic.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="button secondary" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Сховати" : "Показати усю програму"}
      </button>
    </div>
  );
};

export default CourseTopics;
