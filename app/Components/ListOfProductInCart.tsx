"use client";
import React from 'react'
import { useShoppingCart } from "use-shopping-cart";
import Image from 'next/image';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';

const ListOfProductInCart = () => {
    const { cartCount, shouldDisplayCart, handleCartClick, cartDetails, removeItem, totalPrice, addItem, decrementItem } = useShoppingCart();

    return (
        <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
                {cartCount === 0 ? (
                    <h2 className="py-6">You don't have any itms</h2>
                ) :
                    (
                        <>
                            {Object.values(cartDetails ?? {}).map((entry) => (
                                <li key={entry.id} className="flex py-6 ">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <Image
                                            src={entry.image as string}
                                            alt="Dish image"
                                            width={100}
                                            height={100}
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>{entry.name}</h3>
                                                <p className="ml-4">${entry.price}</p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                                                {entry.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <div className="flex flex-row  justify-between items-center text-2xl space-x-11 w-1/2" >
                                                <div className="bg-red-700 rounded-full w-1/10 cursor-pointer hover:opacity-75" onClick={() => decrementItem(entry.id)}  >
                                                    <CiCircleMinus />
                                                </div>
                                                <p className="text-gray-500 text-xl mx-auto w-2/10 ">
                                                    {entry.quantity}
                                                </p>
                                                <div className="bg-green-700 rounded-full self-end w-1/10 cursor-pointer hover:opacity-75" onClick={() => addItem(entry)}>
                                                    <CiCirclePlus />
                                                </div>
                                            </div>

                                            <div className="flex">
                                                <button type="button" className="font-medium text-primary hover:text-primary/80"
                                                    onClick={() => removeItem(entry.id)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </>
                    )
                }
            </ul>
        </div>
    )
}

export default ListOfProductInCart