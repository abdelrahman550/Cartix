import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
export default function ProductCardSkeleton() {
  return (
    <Card className="w-full">
      <CardContent>
        <Skeleton className="aspect-video w-full" />
      </CardContent>
      <CardHeader className="gap-3">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <div className="flex items-center justify-between px-4">
        <Skeleton className="h-4 w-15" />
        <Skeleton className="h-8 w-8" />
      </div>
    </Card>
  );
}
