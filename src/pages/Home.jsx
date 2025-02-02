import { courses } from "../components/CourseSlider";
import HomeAdvantages from "../components/HomeAdvantages";
import HomeForm from "../components/HomeForm";
import HomeTeacher from "../components/HomeTeacher";
import HomeTop from "../components/HomeTop";

export function Home() {
  return (
    <>
      <HomeTop />
      <HomeTeacher />
      <HomeAdvantages />
      <HomeForm courses={courses} />
    </>
  );
}
