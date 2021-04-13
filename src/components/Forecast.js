import { useState, useEffect } from "react";
import ForecastChart from "./ForecastChart";
import styled from "styled-components";
import { colors } from "./styleComponents/variable";

const ForecastContainerStyles = styled.div`
  margin-left: 20px;
  background: #fff;
  height: fit-content;
  padding: 20px;
  color: ${colors.primaryColor};
`;

export default function Forecast(props) {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = async () => {
    await fetch(
      `${process.env.REACT_APP_API_URL}/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${props.location}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          setIsLoaded(false);
        } else {
          setData(result);
          setIsLoaded(true);
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, [props.location]);

  if (!isLoaded) {
    return <div>Loading data for forecast..</div>;
  } else
    return (
      <ForecastContainerStyles>
        <div>
          {props.location}, {data.forecast.forecastday[0].date}
        </div>
        <ForecastChart forecast={data.forecast.forecastday[0].hour} />
      </ForecastContainerStyles>
    );
}
