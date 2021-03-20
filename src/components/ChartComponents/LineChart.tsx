import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function LineChart({
  chart_title,
  chart_colors,
  series_name,
  series_data,
  series_dates,
}) {
  const series = [
    {
      name: series_name,
      data: series_data,
    },
  ];

  const options = {
    colors: chart_colors,
    chart: {
      height: 350,
      type: "area",
      animations: {
        enabled: false,
      },
      locales: [
        {
          name: "ptbr",
          options: {
            months: [
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
            ],
            shortMonths: [
              "Jan",
              "Fev",
              "Mar",
              "Abr",
              "Mai",
              "Jun",
              "Jul",
              "Ago",
              "Set",
              "Out",
              "Nov",
              "Dez",
            ],
            days: [
              "Domingo",
              "Segunda",
              "Terça",
              "Quarta",
              "Quinta",
              "Sexta",
              "Sabado",
            ],
            shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
            toolbar: {
              exportToSVG: "Download SVG",
              exportToPNG: "Download PNG",
              menu: "Menu",
              selection: "Seleção",
              selectionZoom: "Selecionar Zoom",
              zoomIn: "Zoom In",
              zoomOut: "Zoom Out",
              pan: "Mover",
              reset: "Resetar Zoom",
            },
          },
        },
      ],
      defaultLocale: "ptbr",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: series_dates,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
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
        type={"area"}
        height={350}
      />
    </div>
  );
}
