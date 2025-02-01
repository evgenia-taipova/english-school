import CourseHeader from "../components/СourseHeader";
import CourseDetails from "../components/CourseDetails";
import ForWhom from "../components/ForWhom";
import CourseDescription from "../components/CourseDescription";
import CourseThemes from "../components/CourseThemes";
import CourseBenefits from "../components/CourseBenefits";
import CourseResults from "../components/CourseResults";
import CourseProgram from "../components/CourseProgram";
import CourseForm from "../components/CourseForm";

import {
  headerInfo,
  details,
  targetGroups,
  courseDescription,
  themes,
  benefits,
  results,
  programDescription,
  topics,
} from "../data/courses/english-speaking-b1-business";

function EnglishSpeakingB1BusinessPage() {
  return (
    <main className="page">
      <section className="course__top">
        <div className="course__main">
          <CourseHeader
            title={headerInfo.title}
            features={headerInfo.features}
            description={headerInfo.description}
          />
          <CourseDetails details={details} />
          <button className="button primary">Записатись на курс</button>
        </div>

        <div className="bg__image"></div>
        <div className="bg__footer"></div>
        <div className="bg__section"></div>
      </section>

      <section className="course-description">
        <ForWhom targetGroups={targetGroups} />
        <CourseDescription description={courseDescription} />
      </section>

      <section className="course-themes">
        <CourseThemes themes={themes} />
        <CourseBenefits benefits={benefits} />
      </section>

      <CourseResults results={results} />

      <section className="course-topic-form">
        <CourseProgram description={programDescription} topics={topics} version="v2"/>
        <CourseForm />
      </section>
    </main>
  );
}

export default EnglishSpeakingB1BusinessPage;
