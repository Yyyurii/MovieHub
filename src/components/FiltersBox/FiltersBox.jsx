import "./FiltersBox.scss";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import AppContext from "../../context";
import useImdb from "../../services/imdb";

const FiltersBox = () => {
  const { setDiscoverFilters, getDiscoverMovie } = useContext(AppContext);
  const { movieList } = useImdb();
  const [listMovie, setListMovie] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    getMovieList();
    if(sortBy || genre !== '') getDiscoverMovie(`${sortBy + genre}`);
  }, [sortBy, genre]);

  const setFiltersUrl = () => {
    setDiscoverFilters(`${sortBy + genre}`);
  };

  const getMovieList = () => {
    movieList().then((res) => setListMovie(res.genres));
  };

  return (
    <div className="filter-box">
      <DropdownButton
        id="nav-dropdown-dark-example"
        menuVariant="dark"
        title="Sort by"
        variant="dark"
        onSelect={(e) => {
          setSortBy(e);
          setFiltersUrl();
        }}
      >
        <Dropdown.Item eventKey="&sort_by=popularity.desc">
          Popular
        </Dropdown.Item>
        <Dropdown.Item eventKey="&sort_by=release_date.desc">
          Release date
        </Dropdown.Item>
        <Dropdown.Item eventKey="&sort_by=vote_average.asc">
          Vote average
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        id="nav-dropdown-dark-example"
        menuVariant="dark"
        title="Genre"
        variant="dark"
        onSelect={(e) => {
          setGenre(e);
          setFiltersUrl();
        }}
      >
        {listMovie.map((item) => {
          return (
            <Dropdown.Item
              key={item.id}
              eventKey={`&with_genres=${item.name.toLowerCase()}`}
            >
              {item.name}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
      <Button
        className="filter-box__btn-clear"
        variant="outline-light"
        size="sm"
      >
        Clear filters
      </Button>
    </div>
  );
};

export default FiltersBox;
