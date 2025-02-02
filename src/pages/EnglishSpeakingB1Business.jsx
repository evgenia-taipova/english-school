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
import TopBg from "../components/TopBg";
import backgroundUrl from "../assets/pages-bg/english-speaking-business.png";

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
        <TopBg backgroundUrl={backgroundUrl} />
      </section>

      <section className="course-description">
        <ForWhom targetGroups={targetGroups} />
        <CourseDescription description={courseDescription} />
        <div className="course-results__gradient"></div>
      </section>

      <section className="course-themes">
        <CourseThemes themes={themes} />
        <CourseBenefits benefits={benefits} />
      </section>

      <CourseResults results={results} />

      <section className="course-topic-form">
        <CourseProgram
          description={programDescription}
          topics={topics}
          version="v2"
        />
        <CourseForm />
        <div className="course-results__gradient"></div>
      </section>
    </main>
  );
}

export default EnglishSpeakingB1BusinessPage;
