const CourseDetails = ({ details }) => {
  return (
    <ul className="course__details-list">
      {details.map((detail, index) => (
        <li key={index} className="course__detail-item">
          <img src={detail.icon} alt="" />
          <span>{detail.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default CourseDetails;
