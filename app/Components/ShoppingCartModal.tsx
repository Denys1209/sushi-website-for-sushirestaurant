"use client";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

import React, { useState } from 'react';
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "@/components/ui/button";
import ListOfProductInCart from "./ListOfProductInCart";
import CheckoutButton from "./CheckoutButton";

const ShoppingCartModal = () => {

    const { shouldDisplayCart, handleCartClick, totalPrice, } = useShoppingCart();
    

    return (
        <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
            <SheetContent className="sm:max-w-lg w-[90vw] bg-white">
                <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>
                <div className="h-full flex flex-col justify-between">
                    <ListOfProductInCart />
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>${totalPrice}</p>
                        </div>

                        <p className="mt-0.5 text-sm text-gray-500">
                            Shipping and taxes are calculated at checkout
                        </p>

                        <div className="mt-6">
                            <CheckoutButton/>
                        </div>

                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                OR{" "} <button onClick={() => handleCartClick()} className="font-medium text-primary hover:text-primary/80">Continue Shopping</button>
                            </p>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default ShoppingCartModal