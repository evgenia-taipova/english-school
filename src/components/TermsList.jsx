import termsData from "../data/termsData";
import TermsItem from "./TermsItem";

function TermsList({ language }) {
  return (
    <ul className="privacy__list">
      {termsData[language]?.map((item, index) => (
        <TermsItem key={index} title={item.title} content={item.content} />
      ))}
    </ul>
  );
}

export default TermsList;
