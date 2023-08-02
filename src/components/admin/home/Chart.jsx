import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "SAVINGS",
      data: [
        12000000, 12500000, 7898000, 9000000, 6780000, 9800000, 10300000,
        5006000, 5940000, 11000000, 8000000, 10000000,
      ],
      backgroundColor: "#2B5BBA",
    },
  ],
};

export const Chart = () => {
  return <Bar options={options} data={data} />;
};
