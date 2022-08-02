import "./topicSectionHeader.scss";

const TopicSectionHeader = ({title}) => {
  return (
    <div className="topic-section__header">
      <a href="/" className="topic-section__title">
        {title}
      </a>
      <button>View More</button>
    </div>
  );
};

export default TopicSectionHeader;
