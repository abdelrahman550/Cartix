import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="grid h-full grid-cols-1 gap-10 p-10 lg:grid-cols-10 lg:gap-16">
      <div className="col-span-10 h-110 lg:col-span-5 lg:h-full xl:col-span-4">
        <Skeleton className="aspect-square w-full" />
      </div>
      <div className="col-span-10 flex h-full flex-col gap-8 lg:col-span-5 xl:col-span-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-32" />
          </div>
          <Skeleton className="h-5 w-32" />
        </div>
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-3/4 mb-8" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-20 w-full" />
        <div className="flex gap-4">
            <Skeleton className="h-12 w-1/2" />
            <Skeleton className="h-12 w-1/2" />
        </div>
        <div className="flex gap-4">
            <Skeleton className="h-9 w-1/2" />
            <Skeleton className="h-9 w-1/2" />
        </div>

        <div className="grid grid-cols-1 gap-3.5 mt-6 lg:grid-cols-2 xl:grid-cols-3">
            <Skeleton className="h-15 w-full" />
            <Skeleton className="h-15 w-full" />
            <Skeleton className="h-15 w-full" />
        </div>
      </div>
    </div>
  );
}
