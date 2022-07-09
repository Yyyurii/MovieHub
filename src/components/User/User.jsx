import "./user.scss";

import userImg from "../../assets/images/icon/photo-cover.svg";

const User = () => {
  return (
    <div className="user">
      <a href="/" className="user__link">
        <img className="user__img icon-photo-cover" src={userImg} alt="User" />
        <span>John Smith</span>
      </a>
    </div>
  );
};

export default User;