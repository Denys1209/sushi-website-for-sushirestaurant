"use client"
import React, { MouseEventHandler, useState } from 'react';
import ListOfProductInCart from './ListOfProductInCart';
import { useShoppingCart } from 'use-shopping-cart';
import OrderService from '@/services/OrderService';
import { ProductCart } from './AddToBag';
import { CartEntry } from 'use-shopping-cart/core';
import { useSession } from 'next-auth/react';

const CheckoutModel = ({ isOpen, onClose }: { isOpen: boolean, onClose: any }) => {
    const session = useSession();
    const { totalPrice, cartDetails, clearCart  } = useShoppingCart();
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = async (event: any)  => {
        event.preventDefault();
        const phoneRegex = /^\+380\s\d{3}\s\d{3}\s\d{3}$/;
        if (Object.values(cartDetails ?? {}).length == 0)
        {
            alert("You don't have any item in your cart");
            return;
        }
        

        if (phoneRegex.test(phoneNumber)) {
            let dihesIds: number[] = []
            let dihesQuantity: number[] = []

            Object.values(cartDetails ?? {}).forEach((entety) => 
            {
                dihesIds.push(Number(entety.id));
                dihesQuantity.push(Number(entety.quantity));
            });
            if (session.data?.user != null){
                OrderService.addJWTtoken(session.data?.user.accessToken);
            }
            var res = await OrderService.createOrder(
                session.data?.user.id ?? null,
                dihesIds,
                dihesQuantity,
                {
                    cost: totalPrice ?? 0,
                    dateTime: new Date(),
                    phoneNumber: phoneNumber,
                }
            );
            console.log(res.data);
            clearCart();
            onClose();
        }
        else {
            alert('Invalid phone number' + phoneNumber);
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto " >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 h-full w-full" >
                <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={onClose}>
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <div className=" bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full h-3/4 w-1/2 m-auto  flex flex-col justify-between p-3">
                    <ListOfProductInCart />
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>${totalPrice}</p>
                        </div>
                    </div>
                    <div className='w-full flex-col'>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                id="phone_number"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="+380 XX XXX XXX"
                                required
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="w-full bg-black text-white mt-2 hover:opacity-75"
                            >
                                Make an order
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutModel;
