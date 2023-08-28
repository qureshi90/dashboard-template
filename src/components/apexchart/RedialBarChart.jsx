import ReactApexChart from "react-apexcharts";

const RedialBarChart = () => {
  const series = [70];
  const options = {
    chart: {
      type: "radialBar",
    },
    stroke: {
      width: 1,
    },
    labels: [""],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 5,
          size: "45%",
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: false,
            color: "#696CFF",
            fontSize: "5px",
          },
          value: {
            offsetY: 8,
            color: "#111",
            fontSize: "15px",
            show: true,
          },
        },
      },
    },
  };

  return (
    <div id="chart" className="">
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={100}
        width={80}
      />
    </div>
  );
};

export default RedialBarChart;
