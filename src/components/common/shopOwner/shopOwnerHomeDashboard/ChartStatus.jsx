import {
    CardBody,
  } from "@material-tailwind/react";
  import Chart from "react-apexcharts";
  
  export default function ChartStatus() {

  
    const chartConfig = {
      type: "pie",
      width: 280,
      height: 280,
      series: [10, 10, 10, 10],
      options: {
        chart: {
          toolbar: {
            show: false,
          },
        },
        title: {
          show: "",
        },
        dataLabels: {
          enabled: true,
        },
        colors: ["#ff8f00", "#3B3B98", "#26de81", "#ff3838"],
        legend: {
          show: false,
        },
        labels: ["Pending", "Follow Up", "Success", "Failed"], // Add labels for the series
      },
    };
  
  
    return (
      <>
       
              <div className="w-full lg:w-80 flex justify-center bg-green-50 border border-green-400 rounded-lg">
                <CardBody className="">
                  <Chart {...chartConfig} />
                </CardBody>
              </div>
           
      </>
    );
  }