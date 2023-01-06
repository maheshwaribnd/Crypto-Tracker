import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //Dont get rid of this - This is *imp*
import { convertNumbers } from '../../../Functions/convertNumber';

const LineChart = ({ chartData, priceType }) => {

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
    scales: {
      y: {
        ticks: {
          callback: function (value){
            if(priceType == "total_volumes"){
              return "$" + convertNumbers(value);
            }
            else if(priceType == "market_caps"){
              return "$" + convertNumbers(value);
            }
            else{
              return "$" + convertNumbers(value);
            }
          }
        }
      }
    }
  };

  return (
    <Line data={chartData} options={options} />
  )
}

export default LineChart;
