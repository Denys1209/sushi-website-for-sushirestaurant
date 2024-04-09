"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { useShoppingCart } from 'use-shopping-cart'

export interface ProductCart {
    name: string, 
    description: string,
    price: number,
    currency: string,
    image: string,
    id: string,
}

const AddToBag = ({currency, description, image, name, price, id} : ProductCart) => {

    const {addItem, handleCartClick,  } = useShoppingCart();

    const product = {
        name: name,
        description: description,
        currency: currency,
        image: image,
        price: price,
        id: id,
    }

    return (
         <div className='cursor-pointer text-2xl w-[54px] h-[54px] bg-green-500 flex items-center justify-center lg:invisible group-hover:visible rounded-full hover:opacity-75 '
            onClick={() => addItem(product)}
         >
                        <MdOutlineShoppingBag />
                    </div>
    )
}

export default AddToBag