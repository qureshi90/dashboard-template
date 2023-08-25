import ReactApexChart from "react-apexcharts";

const DonutChart = () => {
  const series = [44, 55, 41, 17];
  const options = {
    labels: ["Electron", "Fashion", "Decore", "Mobile"],
    colors: ["#696CFF", "#71DD37", "#1EC9EE", "#8592A3"],
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 375,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "80px",
          labels: {
            show: true,
            total: {
              label: "Weekly",
              color: "#566A7F",
              show: true,
              fontSize: 20,
              formatter: function (w) {
                return (
                  w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0) /
                    w.globals.series.length +
                  "%"
                );
              },
            },
          },
        },
      },
    },
  };
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        width={130}
        height={150}
      />
    </div>
  );
};

export default DonutChart;
