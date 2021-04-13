import Weather from "./components/Weather";
import LocationForm from "./components/LocationForm";
import Forecast from "./components/Forecast";
import { useState } from "react";
import styled from "styled-components";
import { ButtonStyles } from "./components/styleComponents/buttons";

const AppContentStyles = styled.div`
  height: 100vh;
  padding: 20px;
  background-color: #afbedc;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const WeatherListStyles = styled.div`
  height: 100%;
  overflow: scroll;
`;

const ButtonContainerStyles = styled.div`
  display: flex;
  flex-direction: row;
  justifycontent: space-between;
`;

function App() {
  const [locations, setLocations] = useState(["krakow"]);
  const [forecastLocation, setForecastLocation] = useState("krakow");
  const addLocation = (location) => {
    setLocations([...locations, location]);
  };

  const selectCity = (location) => {
    setForecastLocation(location);
  };

  const deleteCity = (location) => {
    const filteredList = locations.filter((loc) => loc !== location);
    setLocations([...filteredList]);
  };

  return (
    <AppContentStyles>
      <WeatherListStyles>
        <LocationForm addLocation={addLocation} />
        {locations.map((location, _index) => (
          <Weather key={_index} location={location}>
            <ButtonContainerStyles>
              <ButtonStyles onClick={(e) => selectCity(location)}>
                Today's temp
              </ButtonStyles>
              <ButtonStyles onClick={(e) => deleteCity(location)}>
                Delete
              </ButtonStyles>
            </ButtonContainerStyles>
          </Weather>
        ))}
      </WeatherListStyles>
      <Forecast location={forecastLocation} />
    </AppContentStyles>
  );
}

export default App;
