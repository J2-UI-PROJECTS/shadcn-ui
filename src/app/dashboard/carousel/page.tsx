"use client"
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Page = () => {
  
  return (
    <div className="w-full flex justify-center">
      <Carousel
      className="w-full max-w-xs"
      
      autoplay={1500}
      opts={{
        //dragFree: true,
        loop: true,
      }}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          // Use the basis-* utilities to set the initial size of flex items.
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Para que la flechita aparezca entrada */}
      <CarouselPrevious className='hidden sm:flex justify-center items-center' />
      {/* Para que la flechita aparezca entrada */}
      <CarouselNext className='hidden sm:flex justify-center items-center' />
    </Carousel>
    </div>
    
  )
}

export default Page