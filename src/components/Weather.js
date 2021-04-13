import { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "./styleComponents/variable";

const WeatherContainerStyles = styled.div`
  background-color: ${colors.primaryColor};
  margin-top: 10px;
  padding: 10px;
`;

const WeatherHeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WeatherStyles = styled.div`
  display: flex;
  .Weather-condition {
    display: flex;
    flex-direction: column;
    width: min-content;
  }

  .Weather-temp {
    font-size: 90px;
    padding: 10px;
  }

  .Weather-update {
    font-size: 12px;
  }
`;

export default function Weather(props) {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchData = async () => {
    await fetch(
      `${process.env.REACT_APP_API_URL}/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${props.location}`
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
    const interval = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (!isLoaded) {
    return <div>Loading data for {props.location}...</div>;
  } else
    return (
      <WeatherContainerStyles>
        <WeatherHeaderStyles>
          {props.location}
          {props.children}
        </WeatherHeaderStyles>
        <WeatherStyles>
          <div className="Weather-condition">
            <img
              src={data.current.condition.icon}
              border="0"
              alt=""
              title="condition"
            ></img>
          </div>
          <div className="Weather-temp">
            {data.current.temp_c}
            <span>&#8451;</span>
          </div>
        </WeatherStyles>
        <span>{data.current.condition.text}</span>
      </WeatherContainerStyles>
    );
}
