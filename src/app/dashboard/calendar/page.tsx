"use client"
import { Calendar } from '@/components/ui/calendar'
import React, { useState } from 'react'
const Page = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([])
  const smallDate= date?.toLocaleDateString("es-ES",{
    weekday:"short",
    day:"numeric",
    month:"long"
  })
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
      <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
      //dshabilitar los domingos o los sabados
      disabled={(date)=>date.getDate()===0 || date.getDate()===6}
    />
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
      disabled={(date)=>date > new Date()}
    />
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
    <Calendar
      mode="multiple"
      selected={multipleDates}
      onSelect={setMultipleDates}
      className="rounded-md border shadow"
    />
    <div>
      <h1 className='text-3xl'>Informacion</h1>
      <div className="border-b"></div>
      <p>{smallDate}</p>
      <p>{multipleDates?.map((date)=>date.toLocaleDateString()).join(", ")}</p>
    </div>
    </div>
  )
}

export default Page