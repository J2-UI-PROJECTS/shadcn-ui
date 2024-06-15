"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

//!esto es un interface personalizada que necesita extender React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
interface indicatorColor extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>{
  indicatorColor?: string, 
}
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  //React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
  indicatorColor
>(({ className, value,indicatorColor='bg-primary', ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn("h-full w-full flex-1 bg-primary transition-all",indicatorColor)}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
