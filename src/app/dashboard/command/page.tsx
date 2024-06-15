"use client"
import React, { useEffect, useState } from 'react'
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons"
 
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
const Page = () => {
const [open, setOpen] = useState(false)
useEffect(() => {
  const onKeyDown = (e: KeyboardEvent) => {
    console.log('metakey',e.metaKey)
    console.log('ctrlKey',e.ctrlKey)
    if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }
  //!Cuando se renderiza el componente se ejecuta este efect que lo que hace es crear un addEventListener y asignarle la funcion onKeyDown()
  document.addEventListener("keydown", onKeyDown)
  return () => document.removeEventListener("keydown", onKeyDown)
}, [])

  return (
    <div><CommandDialog open={open} onOpenChange={setOpen}>
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem onSelect={()=>console.log('calendar')}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span>Calendar</span>
        </CommandItem>
        <CommandItem onSelect={()=>console.log('Search')}>
          <FaceIcon className="mr-2 h-4 w-4" />
          <span>Search Emoji</span>
        </CommandItem>
        <CommandItem onSelect={()=>console.log('Launch')}>
          <RocketIcon className="mr-2 h-4 w-4" />
          <span>Launch</span>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem onSelect={()=>console.log('Profile')}>
          <PersonIcon className="mr-2 h-4 w-4" />
          <span>Profile</span>
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem onSelect={()=>console.log('Mail')}>
          <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
          <span>Mail</span>
          <CommandShortcut>⌘B</CommandShortcut>
        </CommandItem>
        <CommandItem onSelect={()=>console.log('Settings')}>
          <GearIcon className="mr-2 h-4 w-4" />
          <span>Settings</span>
          <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
  <div className='mt-10 h-[200px] flex justify-center items-center'>
  <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
        Or {" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">ctrl</span> + J
        </kbd>
      </p>

  </div>
  
  </div>
  )
}

export default Page