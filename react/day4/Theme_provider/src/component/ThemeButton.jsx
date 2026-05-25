import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeButton () {
      const { theme,toggleTheme } = useContext(ThemeContext)

      return (
            <button onClick={toggleTheme}>{theme == "light" ? "switch to dark" : "Swothc to light"}</button>
      )
}

export default ThemeButton;