import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ThemeButton from "./ThemeButton";


function Content () {
      const {theme} = useContext(ThemeContext);


      const style = {
            backgroundColor : theme == "light" ? "whilte" : "black",
            color : theme == "light" ? "black" : "white",
            minHeight : "100vh"
      }

      return (
            <div style={style}>
                  <h1>Theme Context APP</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam laborum mollitia nostrum deserunt. Quidem quaerat nulla itaque eligendi ab deserunt? Vero odit dolore placeat deserunt eos cum odio ea exercitationem.
                  </p>
                  <ThemeButton/>
            </div>
      )
}

export default Content;