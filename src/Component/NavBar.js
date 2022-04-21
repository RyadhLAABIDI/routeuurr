import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <li> Home </li>
      </Link>
      <Link to="/AboutUs">
        <li>About Us </li>{" "}
      </Link>
      <Link to="/Movies">
        <li> Movies </li>{" "}
      </Link>

      <button className="login">Login</button>
    </nav>
  );
}

export default NavBar;
