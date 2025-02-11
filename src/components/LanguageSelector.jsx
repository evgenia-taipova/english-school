

function LanguageSelector({language, setLanguage}) {

  return (
    <div className="language-selector">
      {/* Обёртка, которая ловит клики */}
      <div className="language-selector__wrapper" onClick={() => document.getElementById("languageSelect").click()}>
        <select
          id="languageSelect"
          className="language-selector__custom-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">ENG</option>
          <option value="ua">UKR</option>
        </select>

        {/* SVG-стрелка */}
        <div className="language-selector__custom-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.0007 13.172L16.9507 8.22198L18.3647 9.63598L12.0007 16L5.63672 9.63598L7.05072 8.22198L12.0007 13.172Z"
              fill="#999999"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LanguageSelector;
