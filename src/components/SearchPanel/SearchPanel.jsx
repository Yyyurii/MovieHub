import "./searchPanel.scss";

const SearchPanel = () => {
  return (
    <form action="#" className="search-panel">
      <input
        className="search-panel__input"
        placeholder="Search"
        autoComplete="off"
      ></input>
      <button className="search-panel__button icon-search"></button>
    </form>
  );
};

export default SearchPanel;
