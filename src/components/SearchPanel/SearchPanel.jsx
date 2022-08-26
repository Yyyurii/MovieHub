import "./searchPanel.scss";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useImdb from "../../services/imdb";
import AppContext from "../../context";

const SearchPanel = () => {
  const [isShownInput, setIsShownInput] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { multiSearch, loading, error } = useImdb();
  const { setSearchData } = useContext(AppContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setIsShownInput((isShownInput) => !isShownInput);
  };

  const searchMulti = (term) => {
    multiSearch(term).then((res) => {
      if (res.length > 0 && !error) {
        setSearchData(res);
        navigate("MovieHub/search");
      } else {
        navigate("MovieHub/error");
      }
    });
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
    >
      <input
        value={searchValue}
        className="search-panel__input"
        placeholder="Search"
        autoComplete="off"
        onChange={(e) => setSearchValue(e.target.value)}
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
