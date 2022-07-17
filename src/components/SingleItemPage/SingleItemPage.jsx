import "./singleItemPage.scss";
import world from "../../assets/images/previews/world.jpg";

const SingleItemPage = () => {
  const styles = {
    backgroundImage: `url(${world})`,
  };

  return (
    <>
      <div className="single-page">
        <div className="single-page__background-img" style={styles}>
          <div className="single-page__background-color"></div>
        </div>
        <div className="container">
          <h1 className="single-page__title">World of Dinosors</h1>
          <div className="single-page__columns">
            <div className="single-page__left-column">
              <img className="single-page__poster" src={world} alt="poster" />
              <ul className="single-page__details-list">
                <li className="single-page__list-item-name">Rating:</li>
                <li className="single-page__list-item-value">6.7</li>
                <li className="single-page__list-item-name">Release date:</li>
                <li className="single-page__list-item-value">2022-08-10</li>
                <li className="single-page__list-item-name">Country:</li>
                <li className="single-page__list-item-value">
                  United states of America
                </li>
                <li className="single-page__list-item-name">Genre:</li>
                <li className="single-page__list-item-value">
                  Fantasy, advanture
                </li>
                <li className="single-page__list-item-name">Runtime:</li>
                <li className="single-page__list-item-value">139 min</li>
              </ul>
            </div>
            <div className="single-page__right-column">
              <div className="single-page__video"></div>
              <div className="single-page__overview">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                magni dolore inventore repellat facilis nulla, atque, nam, enim
                ab vitae accusantium sed illo quidem nobis repellendus rem
                voluptatum? Magni sequi, at tempore odio velit facilis corporis
                nihil nobis ad? Iure aliquid ut facilis odio architecto pariatur
                quae deleniti, dolorem a non quasi earum consequatur quia
                expedita vitae possimus nihil nemo aut tempore culpa deserunt
                vel maxime atque. Autem quis, tempora odit officia aperiam ipsa
                voluptate similique omnis perferendis facere unde a nam laborum!
                Ea eligendi, debitis laudantium illum vel eius perspiciatis quas
                placeat fugit nostrum dolorum blanditiis sit similique
                doloribus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleItemPage;
