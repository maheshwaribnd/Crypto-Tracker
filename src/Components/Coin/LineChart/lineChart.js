import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this - This is *imp*

const LineChart = ({ chartData }) => {

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  return (
    <Line data={chartData} options={options} />
  )
}

export default LineChart;
