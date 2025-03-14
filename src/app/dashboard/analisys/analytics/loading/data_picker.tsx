import { Skeleton } from "@/components/ui/skeleton";
export default async function DataPickerLoading() {
  return (
    <div className="flex items-center justify-center flex-col space-y-3 w-full h-96">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
