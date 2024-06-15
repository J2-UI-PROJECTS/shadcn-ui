import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { resolve6 } from "dns/promises";
import Image from "next/image";
import React from "react";

const getData = async () => {
  await new Promise((resolve,reject) =>
    setTimeout(resolve, 5000)
  );
  return "123456789".split("");
  
};
const Page = async () => {
  const data = await getData();
console.log(data)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {data.map((_, ix) => (
        <Card key={ix}>
          <CardHeader className="flex flex-row">
            <Image
              src="https://github.com/shadcn.png"
              alt={"Shadcn"}
              width={40}
              height={40}
              className="rounded-full mr-2 w-10 h-10"
            />
            <div>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Title</CardDescription>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-end">
            <Button>Mas</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Page;
