import parse from "html-react-parser";

function TermsItem({ title, content }) {
  return (
    <li className="privacy__top">
      {/* Заголовок */}
      <div className="privacy__top-header">
        <h4>{title}</h4>
      </div>
      <div className="privacy__divider"></div>

      {/* Контент */}
      <div className="terms__content">
        {content?.subSections?.map((sub, index) => (
          <div key={index} className="terms__subsection">
            <p className="privacy__top-text">{sub.title}</p>

            {sub.listItems && sub.listItems.length > 0 && (
              <ul className="privacy__content-list">
                {sub.listItems.map((item, i) => (
                  <li className="privacy__content-item" key={i}>
                    <span>• </span>
                    {parse(item)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </li>
  );
}

export default TermsItem;
