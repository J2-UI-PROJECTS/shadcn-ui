"use client"
 
import * as React from "react"
 
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const Page = () => {
  const [progress, setProgress] = useState(0)
 
  useEffect(() => {
    // const timer = setTimeout(() => setProgress(66), 500)
    // return () => clearTimeout(timer)
    const interval=setInterval(()=>{
       setProgress((prev)=>{
        return prev +1
       })
    },100)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="flex justify-center items-center"><Progress value={progress} className="w-[60%]" indicatorColor={cn({
      "bg-red-500" : progress < 50,
      "bg-yellow-500" : progress >= 50 && progress < 80,
      "bg-green-500" : progress >= 80,

    })}/></div>
  )
}

export default Page