import React from 'react';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";


const OurLocation = () => {
    const locations = [
        {
            src: "location1.jpg",
        },
        {
            src: "location2.jpg",
        },
        {
            src: "location3.jpg",
        },
    ]
    return (
        <div className='w-full text-center justify-center flex flex-col items-center my-24'>
            <div className='w-[50%]'>
                <h2 className='leading-relaxed text-gray-500 xl:text-lg'>
                    レストラン
                </h2>
                <h2 className='font-bold text-black text-6xl my-2'>
                    Browse our locations
                </h2>
                <p className='text-gray-500 text-lg  tracking-wide'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, fugiat iusto tempora possimus adipisci, quod ad, perferendis nihil sit rerum quam corrupti dicta! Repellat neque perferendis iusto inventore delectus quis.</p>
            </div>
            <div className='w-full justify-center flex'>
                <Carousel className="  mt-5 w-[738px] h-[568px]">
                    <CarouselContent >
                        {locations.map((item, index) => (
                            <CarouselItem key={index} className='w-[738px] h-[568px] bg-black'>
                                <div className="p-1 w-[738px] h-[568px] bg-black">
                                    <Image src={`/locations/${item.src}`} alt='location1' width={738} height={568} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

export default OurLocation