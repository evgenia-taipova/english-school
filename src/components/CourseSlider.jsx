import ArrowNextIcon from "../assets/arrow-next.svg";
import ArrowPrevIcon from "../assets/arrow-prev.svg";
import ArrowIcon from "../assets/arrow.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { courses } from "../data/coursesCards";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
  dots: slidesCount > 2,
  infinite: slidesCount > 2,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: slidesCount > 2 ? <NextArrow /> : null,
  prevArrow: slidesCount > 2 ? <PrevArrow /> : null,
  customPaging: () => <div className="custom-dot" />,
  dotsClass: "slick-dots custom-dots",
  responsive: [
    {
      breakpoint: 981,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        nextArrow: false,
        prevArrow: false,
      },
    },
  ],
});

const CourseSlider = ({ title, category }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isLargeScreen = windowWidth >= 1250;

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
      {isMobile && category === "grammar" ? (
        filteredCourses.map((course) => (
          <div
            key={course.id}
            className="slide"
            onClick={() => handleCourseClick(course.link)}
          >
            <div className="slide-content">
              <span>{course.id < 10 ? `0${course.id}` : course.id}</span>
              <div className="slide-content__header">
                <h3>{course.title}</h3>
              </div>
              <p>{course.description}</p>
            </div>
            <button className="button primary">Подробицi</button>
          </div>
        ))
      ) : (
        <Slider
          {...settings(filteredCourses.length)}
          key={filteredCourses.length}
        >
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="slide"
              onClick={() => handleCourseClick(course.link)}
            >
              <div className="slide-content">
                <span>{course.id < 10 ? `0${course.id}` : course.id}</span>
                <div className="slide-content__header">
                  <h3>{course.title}</h3>
                </div>
                <p>{course.description}</p>
              </div>
              <button className="button primary">Подробицi</button>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CourseSlider;
