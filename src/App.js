import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import LightToggle from "./components/LightToggle.js";
//import ChakraNavBar from "./components/ChakraNavBar.js";
import { useState } from "react";
import "./Stylesheet.css";

function App() {
  // declare state variable
  // for state hooks, call them on top lvl only
  const [theme, setTheme] = useState(0);

  let picture;
  if (theme) {
    picture = (
      <img src="https://feliciakuan.com/src/images/DSC_3044.jpg" alt="Night" />
    );
  } else {
    picture = (
      <img src="https://feliciakuan.com/src/images/DSC_7586.jpg" alt="Day" />
    );
  }

  return (
    <ChakraProvider>
      <div className="homepage">
        <div className={theme ? "night-theme" : "day-theme"}>
          <LightToggle isOn={theme} handleToggle={() => setTheme(!theme)} />

          <div className="container">{picture}</div>
          <p className="bio">
            I'm a developer with a childhood dream of becoming a writer
          </p>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
