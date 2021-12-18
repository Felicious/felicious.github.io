import sunflower from "./images/DSC_7586.jpg";
import lantern from "./images/DSC_3044.jpg";
import LightToggle from "./LightToggle.js";
import { useState } from "react";

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
    <div className="App">
      <LightToggle isOn={theme} handleToggle={() => setTheme(!theme)} />
      {picture}
    </div>
  );
}

export default App;
