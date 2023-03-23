import "./Chart.css";
import ChartBar from "../ChartBar/CharBar";

const Chart = ({ chartData }) => {
  const valueArray = chartData.map((item) => item.value);
  const maxValue = Math.max(...valueArray);
  return (
    <div className="chart">
      {chartData.map(({ value, label }) => {
        return (
          <ChartBar
            key={label}
            value={value}
            label={label}
            maxValue={maxValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
