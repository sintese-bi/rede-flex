import Bignumbers from "./analytics/components/big_numbers";
import Charts from "./analytics/components/charts";
import DataPicker from "./analytics/components/data_picker";
import Filter from "./analytics/components/filter";

export default async function Page({ params }: { params: { filter: string } }) {
  const filter = params.filter;
  return (
    <div className="flex flex-col gap-4 h-full w-full">
      <Filter filter={filter} />
      <div className="flex flex-col gap-6 h-full w-full">
        <DataPicker filter={filter} />
        <div className="flex lg:flex-row md:flex-row sm:flex-col xs:flex-col flex-col items-start gap-6">
          <Bignumbers />
        </div>
        <div className="flex flex-col h-full w-full gap-8">
          <Charts />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ filter: "station" }, { filter: "regional" }];
}
