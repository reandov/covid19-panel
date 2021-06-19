import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function BarChart({
  chart_title,
  chart_colors,
  series_name,
  series_data,
  series_categories,
}) {
  const series = [
    {
      name: series_name,
      data: series_data,
    },
  ];

  const options: any = {
    colors: chart_colors,
    chart: {
      height: 350,
      type: "bar",
      animations: {
        enabled: false,
      },
    },
    grid: {
      show: true,
      strokeDashArray: 5,
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: false,
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#f7b707"],
      },
    },

    xaxis: {
      categories: series_categories,
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
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
      tickAmount: 20,
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        formatter: function (val, _) {
          return Intl.NumberFormat("pt-br").format(val);
        },
      },
    },
    title: {
      text: chart_title,
      align: "center",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#263238",
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type={"bar"}
        height={350}
      />
    </div>
  );
}
