import { courses } from "../components/CourseSlider";
import HomeAdvantages from "../components/HomeAdvantages";
import HomeForm from "../components/HomeForm";
import HomeTeacher from "../components/HomeTeacher";
import HomeTop from "../components/HomeTop";
import { useScroll } from "../components/ScrollContext";

export function Home() {
  const { formRef } = useScroll();

  return (
    <>
      <HomeTop />
      <HomeTeacher />
      <HomeAdvantages />
      <HomeForm courses={courses} ref={formRef} />
    </>
  );
}
