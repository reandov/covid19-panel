import { Line } from "react-chartjs-2";
import * as data from "../../../data/test_data.json";

export function BarChart() {
  var dates = Object.values(data.date);
  var new_cases = Object.values(data.new_num_cases);
  // var new_deaths = data.new_num_deaths;

  return (
    console.log(dates),
    (
      <div>
        <Line
          height={400}
          width={600}
          data={{
            labels: dates,
            datasets: [
              {
                label: "# of votes",
                data: new_cases,
                backgroundColor: "yellow",
                borderColor: "orange",
                borderWidth: 2,
                fill: false,
                pointBorderWidth: 2,
                pointHoverRadius: 8,
                pointHoverBorderWidth: 1,
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: "Novos Casos (24hrs)",
              fontSize: 24,
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  type: "time",
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 20,
                    minRotation: 0,
                    maxRotation: 0,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    )
  );
}
