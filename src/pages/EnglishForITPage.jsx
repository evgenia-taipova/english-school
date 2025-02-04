import CourseHeader from "../components/СourseHeader";
import CourseDetails from "../components/CourseDetails";
import CourseBonus from "../components/CourseBonus";
import ForWhom from "../components/ForWhom";
import CourseDescription from "../components/CourseDescription";
import CourseThemes from "../components/CourseThemes";
import CourseBenefits from "../components/CourseBenefits";
import CourseResults from "../components/CourseResults";
import CourseProgram from "../components/CourseProgram";
import CourseForm from "../components/CourseForm";
import { useScroll } from "../components/ScrollContext";

import {
  headerInfo,
  details,
  bonusData,
  targetGroups,
  courseDescription,
  themes,
  benefits,
  results,
  programDescription,
  topics,
} from "../data/courses/english-for-it";
import TopBg from "../components/TopBg";
import backgroundUrl from "../assets/pages-bg/english-for-it.png";

function EnglishForITPage() {
  const { formRef } = useScroll();

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
          <button
            className="button primary"
            onClick={() =>
              formRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Записатись на курс
          </button>
        </div>
        <CourseBonus {...bonusData} />

        <TopBg backgroundUrl={backgroundUrl} top="-108px" />
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
        <CourseProgram description={programDescription} topics={topics} />
        <CourseForm ref={formRef} />
        <div className="course-results__gradient"></div>
      </section>
    </main>
  );
}

export default EnglishForITPage;
