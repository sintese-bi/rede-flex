import LineChart from "./analytics/components/line-chart";
async function getData() {
  const response = await fetch("http://localhost:8080/v1/databaseall", {
    cache: "no-cache",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch databaseall route response");
  }
  return response.json();
}
export default async function Analisys() {
  const data = await getData();
  return (
    <div>
      <LineChart />
    </div>
  );
}
