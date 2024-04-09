"use client"
import UserService from '@/services/UserService'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci'

const HeartButton = ({ productId }: { productId: number }) => {
    const session = useSession();
    const [isRed, setIsRed] = useState(session.data == null ? false : (session.data.user.favoriteDishesIds.includes(productId)));
    if (session.data == null) {
        return <div className='w-[54px] h-[54px]'></div>;
    }
    else {
        console.log(session.data.user.favoriteDishesIds);
        const onClickHandler = async () => {
            if (!session.data.user.favoriteDishesIds.includes(productId)) {
                session.data.user.favoriteDishesIds.push(productId);
                setIsRed(session.data.user.favoriteDishesIds.includes(productId));
                await UserService.addFavoriteDish(session.data.user.id, productId);
            }
            else {
                const index = session.data.user.favoriteDishesIds.indexOf(productId);
                session.data.user.favoriteDishesIds.splice(index);
                setIsRed(session.data.user.favoriteDishesIds.includes(productId));
                await UserService.deleteFavoriteDish(session.data.user.id, productId);
            }
        }


        return (

            <div className={'cursor-pointer text-2xl w-[54px] h-[54px] flex items-center justify-center  lg:invisible group-hover:visible rounded-full border-2 shadow-2xl hover:opacity-75 ' + (isRed ? 'bg-red-700' : '')}
                onClick={onClickHandler}
            >
                <CiHeart />
            </div>
        )
    }
}

export default HeartButton