import CourseTopics from "./CourseTopics";

function CourseProgram({ description, topics, version }) {
  return (
    <div className="course-topic">
      <div className="course-topic__heading">
        <h2>Програма курсу</h2>
        <p>{description}</p>
      </div>
      <CourseTopics topics={topics} version={version}/>
    </div>
  );
}

export default CourseProgram;
