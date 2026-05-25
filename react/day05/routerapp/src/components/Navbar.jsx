import { Link } from "react-router-dom";

function Navbar() {
      return (
            <nav
                  style={{
                        display: "flex",
                        gap: "20px",
                        padding: "20px",
                        background: "#ddd",
                  }}
            >
                  <Link to="/">Home</Link>
                  <Link to="/courses">Courses</Link>
                  <Link to="/about">About</Link>
            </nav>
      );
}

export default Navbar;