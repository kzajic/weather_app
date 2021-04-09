import "./Weather.css";
import { useState, useEffect } from "react";

export default function Weather(props) {
  const [data, setData] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);

  const fetchData = async () => {
    await fetch(
      `${process.env.REACT_APP_API_URL}/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${props.location}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          setisLoaded(false);
        } else {
          setData(result);
          setisLoaded(true);
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
      <div>
        <div>{props.location}</div>
        <span className="Weather-update">
          Last updated: {data.current.last_updated}
        </span>
        <div className="Weather">
          <div className="Weather-condition">
            <img src={data.current.condition.icon} border="0" alt=""></img>
            <span>{data.current.condition.text}</span>
          </div>
          <div className="Weather-temp">
            {data.current.temp_c}
            <span>&#8451;</span>
          </div>
        </div>
      </div>
    );
}
