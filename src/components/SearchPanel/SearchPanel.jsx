import "./searchPanel.scss";

import { useState } from "react";

const SearchPanel = () => {
  const [isShownInput, setIsShownInput] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsShownInput((isShownInput) => !isShownInput);
  };

  return (
    <form
      action="#"
      className={isShownInput ? "search-panel active" : "search-panel"}
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
