import React from 'react';
import Image from 'next/image';
import {  GetDishDto } from '@/types/Dish';
import { CiHeart } from 'react-icons/ci';
import { MdOutlineShoppingBag } from 'react-icons/md';
import AddToBag from './AddToBag';
import HeartButton from './HeartButton';


const DishCard = ({ dish }: { dish: GetDishDto }) => {
    return (
        <div className='group relative ms:h-[55vh]  hover:shadow-2xl transition ease-in-out delay-150  duration-300 p-5' >
            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 lg:h-80">
                <Image src={dish.imageURL} alt="Product image" className="w-full h-full object-center lg:h-full lg:w-full"
                    width={366}
                    height={366}
                />
            </div>
            <div className="mt-4 text-center flex flex-col space-y-4">
                <div className='w-full'>
                    <h3 className="text-xl text-gray-700">
                        {dish.name}
                    </h3>
                    <p className="mt-1 text-md text-gray-500">
                        {dish.description}
                    </p>
                </div>
                <div className='w-full flex justify-between'>
                    <HeartButton productId={dish.id} />
                    <div>
                        <p className="text-4xl font-bold  text-gray-800">
                            ${dish.cost}
                        </p>
                    </div>
                    <AddToBag
                        currency='USD'
                        description={dish.description}
                        image={dish.imageURL}
                        name={dish.name}
                        price={dish.cost}
                        id={String(dish.id)}
                    />
                </div>

            </div>
        </div>
    )
}

export default DishCard