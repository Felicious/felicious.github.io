import sunflower from "./images/DSC_7586.jpg";
import lantern from "./images/DSC_3044.jpg";
import LightToggle from "./LightToggle.js";

function App() {
  // declare state variable
  // for state hooks, call them on top lvl only
  const [theme, setTheme] = useState(0);

  return (
    <div className="App">
      <LightToggle isOn={theme} handleToggle={() => setTheme(!theme)} />
    </div>
  );
}

export default App;
