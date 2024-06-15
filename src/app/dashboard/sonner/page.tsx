'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { toast } from 'sonner'
const log=(msg:string)=>{
  console.log(msg)
}
const Page = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
       <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          //description: "Sunday, December 03, 2023 at 9:00 AM",
          duration: 4000,
          position: 'top-right',
          description: `${new Date()}`,
          action: {
            label: "Undo",
            //console.log("Undo")
            onClick: () => log("Undo"),
            
          },
        })
      }
    >
      Show Toast
    </Button>

    <Button
      variant="outline"
      onClick={() =>
        toast.success("Event has been created", {
          //description: "Sunday, December 03, 2023 at 9:00 AM",
          duration: 4000,
          position: 'top-right',
          description: `${new Date()}`,
          action: {
            label: "Undo",
            //console.log("Undo")
            onClick: () => log("Undo"),
            
          },
        })
      }
    >
      Show Custom Colors
    </Button>
    </div>
  )
}

export default Page