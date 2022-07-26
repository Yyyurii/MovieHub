import "./Page404.scss";
import error from "../../assets/images/icon/error.svg";

const Page404 = () => {
  return (
    <div className="container">
      <div className="page-404">
        <img className="page-404__img" src={error} alt="error" />
        <span className="page-404__text">Page not found</span>
        <button className="page-404__btn">Back to the Home page</button>
      </div>
    </div>
  );
};

export default Page404;
