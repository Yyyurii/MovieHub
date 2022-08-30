import "./FiltersBox.scss";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import AppContext from "../../context";
import useImdb from "../../services/imdb";

const FiltersBox = ({ isMovie }) => {
  const { getDiscoverMovie, getDiscoverTV } = useContext(AppContext);
  const { movieGenreList, TVGenreList } = useImdb();
  const [sortBy, setSortBy] = useState("");
  const [activeGenre, setActiveGenre] = useState("");
  const [movieGenre, setMovieGenre] = useState([]);
  const [TVGenre, setTVGenre] = useState([]);

  useEffect(() => {
    isMovie ? getMovieList() : getTVList();
    if(sortBy || activeGenre !== "") getDiscoverData();
  }, [sortBy, activeGenre]);

  const getMovieList = () => {
    movieGenreList().then((res) => setMovieGenre(res.genres));
  };

  const getTVList = () => {
    TVGenreList().then((res) => setTVGenre(res.genres));
  };

  const getDiscoverData = () => {
    console.log("getDiscoverData");
    isMovie
      ? getDiscoverMovie(`${sortBy + activeGenre}`)
      : getDiscoverTV(`${sortBy + activeGenre}`);
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
        }}
      >
        <Dropdown.Item eventKey="&sort_by=popularity.desc">
          Popular
        </Dropdown.Item>
        <Dropdown.Item eventKey="&sort_by=release_date.desc">
          Release date
        </Dropdown.Item>
        <Dropdown.Item eventKey="&sort_by=vote_average.asc" >
          Vote average
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        id="nav-dropdown-dark-example"
        menuVariant="dark"
        title="Genre"
        variant="dark"
        onSelect={(e) => {
          setActiveGenre(e);
        }}
      >
        {(isMovie ? movieGenre : TVGenre).map((item) => {
          return (
            <Dropdown.Item
              key={item.id}
              eventKey={`&with_genres=${item.id}`}
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
