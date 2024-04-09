import React, { useEffect, useState } from 'react';
import DishService from '@/services/DishService';
import { GetDishDto } from '@/types/Dish';
import DishCard from '../Components/DishCard';

const GridOfFavoriteDiehes = ({ id }: { id: number }) => {
 const [dishesData, setDishesData] = useState<GetDishDto[]>([]);

 useEffect(() => {
    const fetchDishes = async () => {
      const response = await DishService.getAllFavoriteDishesForUser(id);
      setDishesData(response.data);
    };

    fetchDishes();
 }, [id]);

 return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {dishesData.map((dish: GetDishDto) => (
        <DishCard key={dish.id} dish={dish} />
      ))}
    </div>
 );
};

export default GridOfFavoriteDiehes;
