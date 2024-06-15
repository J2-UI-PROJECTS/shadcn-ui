import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { RocketIcon } from '@radix-ui/react-icons'
import React from 'react'

const page = () => {
  return (
    <div className='grid gap-3'>
       <Alert variant={'destructive'}>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
    <Alert variant={'destructive'}>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
    <Alert variant={'success'}>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
    </div>
  )
}

export default page