import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
export default function CategoryPageLoadingCard() {
  return (
    <Card className="w-full">
      <CardContent>
        <Skeleton className="h-50 w-full" />
      </CardContent>
      <div className="flex items-center justify-center p-4.5 pt-4">
        <Skeleton className="h-10 w-30 rounded-full" />
      </div>
    </Card>
  );
}
