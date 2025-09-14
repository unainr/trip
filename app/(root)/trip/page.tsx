import TripForm from '@/components/home/module/ui/TripForm'
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const TripPage = async () => {
    const {userId} = await auth()
        if(!userId) redirect("/sign-in");
  return (
    <div className='flex items-center justify-center min-h-screen py-16'>
			<TripForm/>
      
    </div>
  )
}

export default TripPage
