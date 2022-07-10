import "./searchPanel.scss";

import { useState } from "react";

const SearchPanel = () => {
  const [isShowInput, setIsShowInput] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsShowInput((isShowInput) => !isShowInput);
  };

  return (
    <form
      action="#"
      className={isShowInput ? "search-panel active" : "search-panel"}
    >
      <input
        className="search-panel__input"
        placeholder="Search"
        autoComplete="off"
      ></input>
      <button
        className="search-panel__button icon-search"
        onClick={handleClick}
      ></button>
    </form>
  );
};

export default SearchPanel;
