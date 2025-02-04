import ArrowNextIcon from "../assets/arrow-next.svg";
import ArrowPrevIcon from "../assets/arrow-prev.svg";
import ArrowIcon from "../assets/arrow.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import englishForIt from "../assets/pages-bg/english-for-it.png";
import englishForBusiness from "../assets/pages-bg/english-for-business.png";

import { useNavigate } from "react-router-dom";

const NextArrow = ({ onClick }) => (
  <button className="custom-arrow next" onClick={onClick}>
    <img src={ArrowNextIcon} alt="Next" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="custom-arrow prev" onClick={onClick}>
    <img src={ArrowPrevIcon} alt="Previous" />
  </button>
);

const settings = (slidesCount) => ({
  className: "slider variable-width",
  dots: slidesCount > 2,
  infinite: slidesCount > 2,
  speed: 500,
  slidesToShow: Math.min(slidesCount, 2),
  slidesToScroll: 1,
  nextArrow: slidesCount > 2 ? <NextArrow /> : null,
  prevArrow: slidesCount > 2 ? <PrevArrow /> : null,
  customPaging: () => <div className="custom-dot" />,
  dotsClass: "slick-dots custom-dots",
});

export const courses = [
  {
    link: "english-for-it",
    id: 1,
    title: "English for IT",
    category: "specialized",
    description:
      "Перетворіть англійську на інструмент для досягнення кар’єрних цілей завдяки онлайн- курсу для IT-спеціалістів.",
    image: englishForIt,
  },
  {
    link: "english-for-business",

    id: 2,
    title: "English for Business",
    category: "specialized",
    description:
      "Опануйте ділову англійську, щоб впевнено спілкуватися з партнерами, вести переговори та досягати нових вершин у бізнесі.",
    image: englishForBusiness,
  },
  {
    link: "english-for-ngos",

    id: 3,
    title: "English for NGOs",
    category: "specialized",
    description:
      "Опануйте англійську для ефективної роботи у громадських організаціях, захисту прав людини та підтримки демократії.",
    image: "/src/assets/pages-bg/english-for-ngos.png",
  },
  {
    link: "english-for-media",

    id: 4,
    title: "English for Media Literacy",
    category: "specialized",
    description:
      "Дізнайтеся, як англійська допомагає орієнтуватися у сучасному світі медіа, критично оцінювати інформацію та розпізнавати маніпуляції.",
    image: "../assets/pages-bg/english-for-media.png",
  },
  {
    link: "english-for-law",

    id: 5,
    title: "English for Law",
    category: "specialized",
    description:
      "Оволодійте англійською для юридичної сфери завдяки курсу, що зосереджується на правовій лексиці та практичних навичках.",
    image: "../assets/pages-bg/english-for-law.png",
  },

  {
    link: "grammar-a2",

    id: 6,
    title: "English Grammar A2",
    category: "grammar",
    description:
      "Покращуйте граматику англійської мови на рівні A2 за допомогою курсу для закріплення основних правил і структури мови.",
    image: "../assets/pages-bg/english-grammar-a2.png",
  },

  {
    link: "grammar-b1",

    id: 7,
    title: "English Grammar B1+",
    category: "grammar",
    description:
      "Поглиблюйте знання граматики англійської мови на рівні B1+ і вдосконалюйте навички використання мови.",
    image: "../assets/pages-bg/english-grammar-b1.png",
  },
  {
    link: "speaking-a2",

    id: 8,
    title: "English Speaking Club (A2 Level)",
    category: "speaking",
    description:
      "Відбувається раз на тиждень! Розмовний клуб англійської мови - це ідеальне місце для тих, хто хоче покращити свою розмовну англійську, позбутися мовного бар'єру та навчитися вільно висловлювати свої думки в повсякденних і професійних ситуаціях.",
    image: "../assets/pages-bg/english-speaking-a2.png",
  },
  {
    link: "speaking-b1",

    id: 9,
    title: "English Speaking Club (B1+ Level)",
    category: "speaking",
    description:
      "Відбувається раз на тиждень! Розмовний клуб англійської мови - це ідеальне місце для тих, хто хоче покращити свою розмовну англійську, позбутися мовного бар'єру та навчитися вільно висловлювати свої думки в повсякденних і професійних ситуаціях.",
    image: "../assets/pages-bg/english-speaking-b1.png",
  },

  {
    link: "speaking-business",

    id: 10,
    title: "English Speaking Club (B1+ Level, Business English)",
    category: "speaking",
    description:
      "Відбувається раз на тиждень! Розмовний клуб англійської мови - це ідеальне місце для тих, хто хоче покращити свою розмовну англійську, позбутися мовного бар'єру та навчитися вільно висловлювати свої думки в повсякденних і професійних ситуаціях.",
    image: "../assets/pages-bg/english-speaking-business.png",
  },
  {
    link: "speaking-it",

    id: 11,
    title: "IT Professionals Speaking Club",
    category: "speaking",
    description:
      "Відбувається раз на тиждень! Розмовний клуб англійської мови - це ідеальне місце для тих, хто хоче покращити свою розмовну англійську, позбутися мовного бар'єру та навчитися вільно висловлювати свої думки в повсякденних і професійних ситуаціях.",
    image: "../assets/pages-bg/english-speaking-it.png",
  },
];

const CourseSlider = ({ title, category }) => {
  const navigate = useNavigate();

  const filteredCourses = courses.filter(
    (course) => course.category === category
  );

  const handleCourseClick = (link) => {
    navigate(`/course/${link}`);
  };
  return (
    <div className="slider-container">
      <h2>{title}</h2>
      <Slider {...settings(filteredCourses.length)}>
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="slide"
            onClick={() => handleCourseClick(course.link)}
          >
            <div
              className="slide-content"
              style={course.id === 7 ? { paddingRight: "60px" } : {}}
            >
              <span>{`0${course.id}`}</span>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
            <button>
              <img src={ArrowIcon} alt="" />
            </button>
            <div></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CourseSlider;
