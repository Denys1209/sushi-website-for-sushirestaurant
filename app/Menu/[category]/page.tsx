import React from 'react'
import DishCard from '../../Components/DishCard';
import DishService from '@/services/DishService';
import { GetDishDto } from '@/types/Dish';

const page = async ({params} : {params : { category: string}}) => {
    const data:GetDishDto[] = (await DishService.getDishesByCategory(params.category)).data;
  return (
     <div className="bg-white my-11">
        <div className="mx-auto max-w-2xl px-4  sm:px-4  lg:max-w-7xl lg:px-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900"
                >Our dishes for {params.category}</h2>

            </div>
        
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {
                    data.map((dish: GetDishDto) => (
                        <DishCard
                            key={dish.id}
                            dish={dish}
                        />

                    ))
                }
            </div>

        </div>
         
    </div>
  )
}

export default page