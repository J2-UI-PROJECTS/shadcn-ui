'use client'
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
const SHEET_SIDES = ["top", "right", "bottom", "left"] as const
const Page = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="grid grid-cols-2 gap-3">
      
        <Button onClick={()=>setOpen(true)}>Open</Button>
      <Sheet open={open} onOpenChange={(value)=>setOpen(value)}>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      
      

  {
    SHEET_SIDES.map((side,ix) => 
      {
        return (
          <Sheet key={ix}>
        <SheetTrigger>Open {side}</SheetTrigger>
        <SheetContent side={side}>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
        )
}
    )
  }



    </div>
  );
};

export default Page;
