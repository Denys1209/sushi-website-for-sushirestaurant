import React from 'react'
import Image from "next/image";
import { Button } from '@/components/ui/button';

const WhyUs = () => {
  return (
    <div className='w-full flex md:flex-row justify-between my-24 flex-col'>
      <div className='w-[45%] flex'>
        <Image src='/imgChief.jpg' alt='chief' width="992" height="1420" className='object-cover' />
        <div className='relative flex flex-col left-7 top-20 z-0 '>
          <Image src='/dish.jpg' alt='dish' width="290" height="434" className='z-0 object-cover' />
          <Image src='/sushiImage.jpg' alt='sushi' width="540" height="572" className='mt-8 z-0 object-cover' />
        </div>
      </div>
      <div className='w-[45%] flex justify-start items-center'>
        <div className='w-[80%] flex flex-col space-y-4'>
          <div className='w-full'>
            <h2 className=' leading-relaxed text-gray-500 xl:text-lg'>
              私たちに関して
            </h2>
            <h2 className='font-bold text-black text-6xl my-2'>
              The best place to eat sushi in the city
            </h2>
            <p className=' text-gray-500 text-lg  tracking-wide ' >
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rem doloremque similique laborum blanditiis accusamus quasi omnis atque tenetur, maxime quisquam voluptates quis eos, ex dolores. Enim, quam. Nihil, cupiditate?</p>
          </div>
          <div className='justify-between flex flex-row'>
            <Button className='bg-black text-white text-2xl p-6 w-[45%] hover:bg-black/70'>About us</Button>
            <Button className='border-black border text-2xl w-[45%] hover:bg-black/10 '>Menu</Button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default WhyUs