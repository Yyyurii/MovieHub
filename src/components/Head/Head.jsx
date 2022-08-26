import "./head.scss";

import Logo from "../Logo";
import Navbar from "../Navbar";
import SearchPanel from "../SearchPanel";
import User from "../User";

const Head = () => {
  return (
    <div className="container">
      <div className="head_absolute">
        <div className="head">
          <Logo />
          <Navbar />
          <SearchPanel />
          {/* <User /> */}
        </div>
      </div>
    </div>
  );
};

export default Head;
