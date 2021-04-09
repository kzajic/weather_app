import "./App.css";
import Weather from "./components/Weather";

function App() {

  return (
    <div className="App">
      <div className="App-content">
        <h3 className="App-title ">Weather App</h3>
        <Weather location={"Jausiers"}></Weather>
        <Weather location={"Krakow"}></Weather>
      </div>
    </div>
  );
}

export default App;
