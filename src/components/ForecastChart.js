import { Chart } from "react-charts";
import { useMemo } from "react";
import styled from "styled-components";

const ChartContainerStyles = styled.div`
  height: 400px;
  width: 550px;
`;

export default function Forecast(props) {
  const axes = useMemo(() => {
    return [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ];
  }, []);

  const chartData = useMemo(() => {
    return [
      {
        data: props.forecast.map((dayTime, index) => {
          return [index, dayTime.temp_c];
        }),
      },
    ];
  }, [props.forecast]);

  return (
    <ChartContainerStyles>
      <Chart data={chartData} axes={axes} />
    </ChartContainerStyles>
  );
}
