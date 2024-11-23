import { CardBody, Spinner } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import authService from "../../../../services/authService";
import { useGetShopStatsQuery } from "../../../../redux/slices/shopApiSlice";

export default function ChartStatus() {
    const user = authService.getCurrentUser();
    const shopId = user?.id;
    const { data, error, isLoading } = useGetShopStatsQuery({ shopId, year: "2024", month: "11" });

    const chartConfig = {
        type: "pie",
        width: 280,
        height: 280,
        series: data
            ? [
                  data.totalVehicles || 0,
                  data.totalOrders || 0,
                  data.totalSettled || 0,
                  data.pendingSettlements || 0,
                  data.totalRevenue || 0, // Add revenue as a slice
              ]
            : [0, 0, 0, 0, 0], // Default series when data is unavailable
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            title: {
                show: false,
            },
            dataLabels: {
                enabled: true,
            },
            colors: ["#ff8f00", "#3B3B98", "#26de81", "#ff3838", "#4CAF50"],
            legend: {
                show: true,
                position: "bottom",
            },
            labels: [
                "Total Vehicles",
                "Total Orders",
                "Total Settled",
                "Pending Settlements",
                "Revenue (₹)",
            ],
        },
    };

    if (isLoading) {
      return <div className=" mb-2">
          <Spinner className=" text-green-500"/>
      </div>
  }
    return (
        <div className="w-full lg:w-80 flex justify-center bg-green-50 border border-green-400 rounded-lg">
            <CardBody>
                <Chart {...chartConfig} />
            </CardBody>
        </div>
    );
}
