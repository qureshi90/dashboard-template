import ReactApexChart from "react-apexcharts";

const ZoomAbleChart = () => {
  const series = [
    {
      name: "XYZ MOTORS",
      data: [323, 23, 121, 444, 98, 321, 22],
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: true,
        tools: {
          download: false,
        },
      },
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: false,
        autoScaleYaxis: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: "",
    },
    colors: ["#696CFF"],
    stroke: { width: 2 },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 10,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    grid: {
      show: false,
      xaxis: {},
      yaxis: {
        show: false,
      },
    },
    xaxis: {
      show: false,
      categories: ["Jan", "Feb", "Apr", "May", "June", "July", "Aug"],
    },
    yaxis: {
      show: false,
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={200}
      />
    </div>
  );
};

export default ZoomAbleChart;
