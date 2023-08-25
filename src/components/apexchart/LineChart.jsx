import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const series = [
    {
      name: "Series 1",
      data: [0, 80, 3, 84, 40, 80, 90, 100],
    },
  ];
  const options = {
    responsive: [
      {
        breakpoint: 375,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
    grid: {
      padding: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      show: false,
      categories: ["", "", "", "", "", "", ""],
    },
    yaxis: {
      show: false,
    },
    chart: {
      height: "auto",
      toolbar: {
        show: true,
        tools: {
          download: false,
        },
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: "#F9AB0B",
      width: 6,
    },
  };
  return (
    <div id="chart" className="linChart flex-grow">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={120}
        width={280}
      />
    </div>
  );
};

export default LineChart;
