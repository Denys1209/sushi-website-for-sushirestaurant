"use client";
import Carousel from "nuka-carousel"
import Image from "next/image";


const Hero = () => {

    return (
        <Carousel className="h-[800px] z-0">
            <div className="w-full h-[800px]">
                <Image src="/hero/1.webp" className="object-cover" alt={"hero1"} width="1920" height="800" />
            </div>
            <div className="w-full h-[800px]">
                <Image src="/hero/2.webp" className="object-cover" alt={"hero1"} width="1920" height="800" />
            </div>
            <div className="w-full h-[800px]">

                <Image src="/hero/3.webp" className="object-cover" alt={"hero1"} width="1920" height="800" />
            </div>
        </Carousel>
    );
};

export default Hero;
