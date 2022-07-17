import errorImg from '../../assets/images/icon/error.svg';
import './page404.scss';

const Page404 = () => {
  return (
    <div className="container">
      <div className="page404">
        <img src={errorImg} alt="error" />
        <h1>Something went wrong</h1>
      </div>
    </div>
  );
};

export default Page404;
