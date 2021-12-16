import logo from "./logo.svg";
import sunflower from "./images/DSC_7586.jpg";
import lantern from "./images/DSC_3044.jpg";

function App() {
  return (
    <div className="App">
      <img src={sunflower} className="sunflower" alt="day" />
      <img src={lantern} className="lantern" alt="night" />
    </div>
  );
}

export default App;
