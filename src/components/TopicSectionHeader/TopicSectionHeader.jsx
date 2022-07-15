import "./topicSectionHeader.scss";

const TopicSectionHeader = () => {
  return (
    <div className="topic-section__header">
      <a href="/" className="topic-section__title">
        Top Movies
      </a>
      <button>View More</button>
    </div>
  );
};

export default TopicSectionHeader;