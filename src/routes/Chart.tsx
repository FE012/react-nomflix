import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts"; // 1. import 해오기

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  const exceptData = data ?? [];

  console.log(data);
  console.log(data?.map((price) => parseFloat(price.close)));

  return (
    <div>
      {isLoading ? (
        "Loading chart"
      ) : (
        <div>
          <ApexChart
            type="line"
            height={200}
            series={[
              {
                name: "Price",
                data: data?.map((price) => parseFloat(price.close)) ?? [],
              },
            ]}
            options={{
              theme: {
                mode: "dark",
              },
              chart: {
                height: 300,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },
              grid: { show: false },
              stroke: {
                curve: "smooth",
                width: 4,
              },
              yaxis: {
                show: false,
              },
              xaxis: {
                axisBorder: { show: false },
                axisTicks: { show: false },
                labels: { show: false },
                type: "datetime",
                categories: data?.map((price) =>
                  new Date(price.time_close * 1000).toISOString()
                ),
              },
              // fill: {
              //   type: "gradient",
              //   gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
              // },
              colors: ["#ABD9FF"],
              tooltip: {
                y: {
                  formatter: (value) => `$ ${value.toFixed(2)}`,
                },
              },
            }}
          />

          <ApexChart
            type="candlestick"
            height={200}
            series={[
              {
                data: exceptData?.map((price) => {
                  return {
                    x: new Date(price.time_open * 1000).toISOString(),
                    y: [price.open, price.high, price.low, price.close],
                  };
                }),
              },
            ]}
            options={{
              chart: {
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },
              theme: {
                mode: "dark",
              },
              grid: { show: false },
              xaxis: {
                axisBorder: { show: false },
                axisTicks: { show: false },
                labels: { show: false },
                type: "datetime",
              },
              yaxis: {
                show: false,
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Chart;
