import { ThemeContext } from "../context/ThemeContext";
import { useContext, useState } from "react";

function Navbar () {
      const {theme} = useContext(ThemeContext);

      return(
            <nav style={{
                  padding:"20px",
                  borderBottom : "1px solid grey"
            }}>
                  <h2>Current theme {theme}</h2>
            </nav>
      )
}
export default Navbar;