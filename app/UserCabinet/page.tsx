"use client"
import { useSession } from 'next-auth/react';
import React from 'react'
import GridOfFavoriteDiehes from './GridOfFavoriteDiehes';

const page =  () => {

  const userData = useSession();

  return (
    <div className="bg-white my-11">
        <div className="mx-auto max-w-2xl px-4  sm:px-4  lg:max-w-7xl lg:px-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900"
                >Your favorite dishes</h2>

            </div>
            <GridOfFavoriteDiehes
              id={userData.data?.user.id!}
            />
        </div>
         
    </div>
  )
}

export default page