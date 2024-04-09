import React from 'react'
import Image from 'next/image';


interface props {
    title: string,
    text: string,
    path: string,
    imageHeight: number,
    imageWidth: number,
}

const TextWithImage = ({title, text, path, imageHeight, imageWidth} : props) => {
  return (
     <div className='w-full bg-white flex items-center'>
        <div className='w-[30%] ml-[15%] mr-[5%]  '>
            <h2 className='font-bold text-black text-6xl my-2'>
                {title}
            </h2>
            <p className='text-gray-500 text-lg  tracking-wide'>
                 
                {text}
            </p>
        </div>
        <div className='w-[50%]'>
            <Image src={path} alt="sushiPlate" height={imageHeight} width={imageWidth}/>
        </div>
    </div>
  )
}

export default TextWithImage