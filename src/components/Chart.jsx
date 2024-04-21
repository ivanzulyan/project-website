import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  tension: 0.4,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Animasi Chart',
    },
  },
};

const labels = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [2523032, 2592819, 2663011, 2733240, 2803283, 2873484, 2943859, 3013851, 2543676, 2564941, 2590257, 2627210],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export default function App() {
  return <Line options={options} data={data} />;
}
