import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
 const data="123456789".split("");
 return (<div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
    {data.map((_, ix) => (
      <Card key={ix}>
        <CardHeader className="flex flex-row">
          <Skeleton
            
            className="rounded-full mr-2 w-10 h-10"
          />
          <div className="flex-col flex-grow">
            <Skeleton className="h-4 w-1/2 mb-2 "/>
            <Skeleton className="h-3 w-full"/>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Skeleton className="h-8 w-16"/>
        </CardFooter>
      </Card>
    ))}
  </div>)
 }