import React from "react";
import ReactApexChart from "react-apexcharts";

const ChartComponent = ({ transactions }) => {
  const chartData = {
    options: {
      chart: {
        id: "basic-line", // Change the chart ID if needed
        toolbar: {
          show: false, // Hide the chart toolbar
        },
      },
      xaxis: {
        categories: transactions.map((transaction) => transaction.date), // Use dates for X-axis
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      colors: ["var(--primary-purple)"], // Set the color for the line, you can use any valid CSS color here
    },
    series: [
      {
        name: "Amount",
        data: transactions.map((transaction) => transaction.amount), // Use amounts for Y-axis
      },
    ],
  };

  return (
    <ReactApexChart
      options={chartData.options}
      series={chartData.series}
      type="line"
      height={350}
    />
  );
};

export default ChartComponent;
