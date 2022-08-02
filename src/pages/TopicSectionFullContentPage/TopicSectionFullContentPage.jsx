import "./TopicSectionFullContentPage.scss";
import TopicSectionItem from "../../components/TopicSectionItem";

const TopicSectionFullContentPage = ({ itemsList }) => {
  return (
    <div className="topic-section-full-content">
      <div className="container">
        <div className="topic-section-items">
          {itemsList.map((item, index) => (
            <TopicSectionItem key={item.id} details={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicSectionFullContentPage;
