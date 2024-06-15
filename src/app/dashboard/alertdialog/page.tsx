"use client"
import React, { useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
const Page = () => {
  const [openDialog, setOpenDialog] = useState(false)
  console.log(openDialog)
  return (
    <div className='grid grid-cols-2 gap-4'>
      <AlertDialog
      open={openDialog}
      //</div>onOpenChange={(open)=>{console.log({open})}}
      onOpenChange={(openValue)=>setOpenDialog(openValue)}
      >
      <AlertDialogTrigger asChild>
        <Button variant="outline" >Show Dialog</Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={()=>{console.log("cancel")}}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={()=>{console.log("continue")}}>Continue</AlertDialogAction>
        </AlertDialogFooter>

      </AlertDialogContent>


    </AlertDialog>
    <Button onClick={()=>{
      setOpenDialog(true)
    }}> Show Dialog manually</Button>
    </div>
  )
}

export default Page