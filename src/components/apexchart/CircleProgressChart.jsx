import ReactApexChart from "react-apexcharts";
const CircleProgressChart = () => {
  const series = [70];
  const options = {
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
            color: "#697A8D",
            offsetY: 30,
          },
          value: {
            offsetY: -15,
            fontSize: "26px",
            color: "#697A8D",
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
        shade: "dark",
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
  };

  return (
    <div id="chart" className="">
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={250}
      />
    </div>
  );
};

export default CircleProgressChart;
