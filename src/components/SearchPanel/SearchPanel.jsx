import "./searchPanel.scss";

import { useState } from "react";
import useImdb from "../../services/imdb";

const SearchPanel = () => {
  const [isShownInput, setIsShownInput] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { multiSearch } = useImdb();

  const handleClick = (e) => {
    e.preventDefault();
    setIsShownInput((isShownInput) => !isShownInput);
  };

  const searchMulti = (term) => {
    multiSearch(term).then((res) => console.log(res));
  };

  const onSubmitEvent = (e) => {
    e.preventDefault();
    searchMulti(searchValue);
    setSearchValue("");
  };

  return (
    <form
      action="#"
      className={isShownInput ? "search-panel active" : "search-panel"}
      onSubmit={(e) => {
        onSubmitEvent(e);
        handleClick(e);
      }}
      onChange={(e) => setSearchValue(e.target.value)}
    >
      <input
        value={searchValue}
        className="search-panel__input"
        placeholder="Search"
        autoComplete="off"
      ></input>
      <div
        className="search-panel__button icon-search"
        onClick={handleClick}
      ></div>
      <button type="submit"></button>
    </form>
  );
};

export default SearchPanel;
