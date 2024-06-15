"use client";
import React, { use, useState } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
const Page = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        <Slider
          defaultValue={[0]}
          max={100}
          step={1}
          onValueChange={(value) => setValue(value[0])}
        />
      </div>
      <div>value :{value}</div>
    </div>
  );
};

export default Page;
