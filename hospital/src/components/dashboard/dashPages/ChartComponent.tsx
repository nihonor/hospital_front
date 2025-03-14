import React from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  defaults,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  elements,
} from "chart.js";
import data from "../../../data/data.json";

// Register necessary components
ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale
);

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const ChartComponent = () => {
  const options = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      title: {
        display: false,
        text: "Sales and Expenses",
      },
    },
    scales: {
      x: {
        type: "category",
        grid: {
          display: false,
        },
      },
      y: {
        type: "linear",
        display: true,
        position: "left",
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        width: "100%",
        height: "300px",
        
      }}
    >
      <Line
        data={{
          labels: data.map((data) => data.lable),
          datasets: [
            {
              label: "revenue",
              data: data.map((data) => data.revenue),
              backgroundColor: "#4200FF",
              borderColor: "#4200FF",
              pointRadius: 0,
            },
            {
              label: "cost",
              data: data.map((data) => data.cost),
              backgroundColor: "#6AD2FF",
              borderColor: "#6AD2FF",
              pointRadius: 0,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
};

export default ChartComponent;
