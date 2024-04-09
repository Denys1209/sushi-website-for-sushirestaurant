import React from 'react';
import Image from 'next/image';
import TextWithImage from '../Components/TextWithImage';
import Statistic from '../Components/Statistic';

const page = () => {
  return (
    <div className='w-full my-4'>
        <TextWithImage title='Who we are?' text='"Sushi X"- is the largest and fastest growing restaurant chain of modern Japanese cuisine, which unites 21 restaurants in 4 cities of Ukraine!' imageHeight={451} imageWidth={650} path='/aboutUs/sushiPlate.jpg' />
        <Statistic/>
        <TextWithImage title='The story of our beginning' text='The first Sushiya restaurant was opened in Kiev in 2006 and immediately won the love of visitors thanks to a wide selection of Japanese dishes. ' imageHeight={451} imageWidth={650} path='/aboutUs/sushiPlate2.jpg' />
    </div>
  )
}

export default page