import './logo.scss';

import logo from "../../assets/images/icon/logo.svg";

const Logo = () => {
  return (
    <a href="/MovieHub" className="logo">
      <img src={logo} alt="logo" />
      <span>MovieHub</span>
    </a>
  );
};

export default Logo;