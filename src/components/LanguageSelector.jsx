import { useRef } from "react";

function LanguageSelector({ language, setLanguage }) {
  const selectRef = useRef(null);

  const handleWrapperClick = () => {
    if (selectRef.current) {
      selectRef.current.click(); // Используем click(), чтобы открыть селект
    }
  };

  return (
    <div className="language-selector">
      <div className="language-selector__wrapper" onClick={handleWrapperClick}>
        <select
          ref={selectRef}
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
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 13.172L16.95 8.222L18.364 9.636L12 16L5.636 9.636L7.05 8.222L12 13.172Z"
              fill="#999999"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LanguageSelector;
