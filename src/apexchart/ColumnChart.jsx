import ReactApexChart from "react-apexcharts";

const ColumnChart = () => {
  const series = [
    {
      name: "Inflation",
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        columnWidth: "15%",
        borderRadius: 4,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      offsetX: 3,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      position: "bottom",
      // offsetY: -20,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    title: {
      text: "Total Revenue",
      fontSize: "100px",
      floating: true,
      offsetY: 0,
      align: "center",
      style: {
        color: "#444",
      },
    },
  };

  return (
    <div id="chart" className="border-r-slate-300 border  flex-grow chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
        // width={389}
      />
    </div>
  );
};
export default ColumnChart;
