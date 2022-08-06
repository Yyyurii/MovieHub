import "./Page404.scss";
import error from "../../assets/images/icon/error.svg";

import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="page-404-container">
      <div className="container">
        <div className="page-404">
          <img className="page-404__img" src={error} alt="error" />
          <span className="page-404__text">Page not found</span>
          <Link to="/MovieHub" className="page-404__btn">Back to the Home page</Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
