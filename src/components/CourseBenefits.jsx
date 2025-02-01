const CourseBenefits = ({ benefits }) => (
    <div className="course-themes__benefits">
      <h3 className="course-themes__title">Що ви отримаєте на курсі</h3>
      <ul className="course-benefits__list">
        {benefits.map((benefit, i) => (
          <li key={i} className="course-benefits__item">– {benefit}</li>
        ))}
      </ul>
    </div>
  );
  
  export default CourseBenefits;
  