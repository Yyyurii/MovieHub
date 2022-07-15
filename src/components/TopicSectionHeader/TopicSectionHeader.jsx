import "./topicSectionHeader.scss";

const TopicSectionHeader = () => {
  return (
    <div className="topic-section__header">
      <a href="/" className="topic-section__title">
        The Most Popular Movies
      </a>
      <button>View More</button>
    </div>
  );
};

export default TopicSectionHeader;
