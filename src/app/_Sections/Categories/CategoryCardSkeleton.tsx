import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
export default function CategoryCardSkeleton() {
  return (
    <Card className="flex w-full items-center justify-center p-7">
      <CardContent>
        <Skeleton className="h-24 w-24 rounded-full" />
      </CardContent>
      <CardHeader className="jus flex h-full w-full flex-col items-center gap-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
    </Card>
  );
}
