"use client"
import { Button } from '@/components/ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'
import React from 'react'

const page = () => {
  return (
    <><div>button</div><div className='grid grid-cols-5 gap-2'>
      <Button>Default</Button>
      <Button variant={"destructive"}>Destructive</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"link"}>Link</Button>
      <Button variant={"outline"}>Outline</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button disabled>Disabled</Button>
      <Button onClick={() => { alert('Me diste click')}}>Click me</Button>
      <Button onClick={() => { alert('Me diste click')}} variant={"success"}>Click me</Button>
      {/* capitalize es una prop personalizada */}
      <Button onClick={() => { alert('Me diste click')}} variant={"success"} capitalize={false}>click me</Button>
      <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>

    </div></>
  )
}

export default page