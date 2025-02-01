import parse from "html-react-parser";
function PrivacyItem({ title, content }) {
  return (
    <li className="privacy__top">
      {/* Заголовок */}
      <div className="privacy__top-header">
        <h4>{title}</h4>
      </div>
      <div className="privacy__divider"></div>
      <div className="privacy__content">
        {/* Абзацы перед списком */}
        {content.paragraphs.map((paragraph, index) => (
          <p key={index} className="privacy__top-text">
            {parse(paragraph)}
          </p>
        ))}

        {/* Список */}
        {content.listItems && (
          <ul className="privacy__content-list">
            {content.listItems.map((item, index) => (
              <li className="privacy__content-item" key={index}>
                <span>• </span>
                {parse(item)}
              </li>
            ))}
          </ul>
        )}

        {/* Текст после списка */}
        {content.afterListText && Array.isArray(content.afterListText) && (
          <div className="privacy__after-text">
            {content.afterListText.map((text, index) => (
              <p key={index} className="privacy__top-text">
                {parse(text)}
              </p>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

export default PrivacyItem;
