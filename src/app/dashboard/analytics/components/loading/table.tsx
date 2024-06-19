import { Skeleton } from "@/components/ui/skeleton";
interface TableInterface {
  title: string;
}
export default async function LoadingTable() {
  return <Skeleton className="w-full h-[20px] h-12 my-4 rounded-full" />;
}
