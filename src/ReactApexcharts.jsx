import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ReactApexchart = () => {
  const [chartData, setChartData] = useState({
    series: [70],
    options: {
      chart: {
        height: 250,
        type: "radialBar",
        offsetY: -10,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "16px",
              color: undefined,
              offsetY: 30,
            },
            value: {
              offsetY: -15,
              fontSize: "26px",
              color: undefined,
              formatter: function (val) {
                return val + "%";
              },
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91],
        },
      },
      stroke: {
        dashArray: 4,
      },
      labels: ["Growth"],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
        height={250}
      />
    </div>
  );
};

export default ReactApexchart;
