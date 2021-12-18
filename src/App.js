import LightToggle from "./LightToggle.js";
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
    <div className={theme ? "night-theme" : "day-theme"}>
      <LightToggle isOn={theme} handleToggle={() => setTheme(!theme)} />
      <div className="image-container">
        {picture}
        <p>Hello, I'm Felicia</p>
      </div>
    </div>
  );
}

export default App;
