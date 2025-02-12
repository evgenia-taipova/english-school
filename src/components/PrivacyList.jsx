import PrivacyItem from "./PrivacyItem";
import privacyData from "../data/privacyData";

function PrivacyList({ language }) {
  return (
    <ul className="privacy__list">
      {privacyData[language]?.map((item, index) => (
        <PrivacyItem key={index} title={item.title} content={item.content} />
      ))}
    </ul>
  );
}

export default PrivacyList;
