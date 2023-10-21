import { Link } from "react-router-dom";
import "./style.css";
import {
  HeartFilled,
  HomeOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
const Navbar = () => {
  return (
    <>
      <div className="mobile-brand">
        <h1>SwiftCart</h1>
      </div>
      <div className="navbar">
        <div className="brand">
          <h1>SwiftCart</h1>
        </div>
        <div className="link-container">
          <ul className="links">
            <li>
              <Link to="/">
                <HomeOutlined className="nav-icon" />
              </Link>
            </li>
            <li>
              <Link to="/shop">
                <ShoppingCartOutlined className="nav-icon" />
              </Link>
            </li>
            <li>
              <Link to="/favourites">
                <HeartFilled className="nav-icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
