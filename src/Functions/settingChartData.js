import { ConvertDate } from "./ConvertDate";

export default function SettingChartData(setChartData, prices1, coin1, coin2, prices2) {
    setChartData({
        labels: prices1.map((data) => ConvertDate(data[0])),
        datasets: [
            {
                label: coin1?.name ?? "",
                data: prices1.map((data) => data[1]),
                borderWidth: 1,
                fill: true,
                tension: 0.25,
                backgroundColor: "rgba(58, 128, 233,0.1)",
                borderColor: "#3a80e9",
                pointRadius: 0,
            },
            prices2 &&
            {
                label: coin2?.name ?? "",
                data: prices2.map((data) => data[1]),
                borderWidth: 1,
                fill: true,
                tension: 0.25,
                backgroundColor: "rgba(97, 201, 111,0.1)",
                borderColor: "#61c96f",
                pointRadius: 0,
            },
        ],
    });
}
