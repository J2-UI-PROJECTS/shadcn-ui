"use client"
import { Badge } from '@/components/ui/badge'
import React, { useState } from 'react'

const Page = () => {
  const [first, setfirst] = useState("hola")
  console.log(first)
  return (
    <div className='flex gap-4'>
      <Badge capitalize={true}>default</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge capitalize={true} variant="success">success</Badge>
      <Badge capitalize={true} variant="info">info</Badge>
    </div>
    
  )
}

export default Page
