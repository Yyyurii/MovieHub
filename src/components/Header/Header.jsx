import "./header.scss";

import Previews from "../Previews/Previews";
import Head from "../Head";

const Header = () => {
  return (
    <header className="header">
      <Head />
      <Previews />
    </header>
  );
};

export default Header;
