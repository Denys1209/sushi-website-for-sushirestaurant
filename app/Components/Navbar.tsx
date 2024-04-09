"use client"
import { Button } from '@/components/ui/button';
import { ShoppingBagIcon } from "lucide-react";
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation';
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart';
import { BiSolidSushi } from "react-icons/bi";
import { GiSushis } from 'react-icons/gi';
import { CiBowlNoodles } from 'react-icons/ci';
import { LuDessert, LuSalad, LuSoup } from "react-icons/lu";
import { MdOutlineFastfood, MdOutlineLocalDrink } from 'react-icons/md';
import SignInButton from './SignInButton';

const links = [
    { name: 'Home', href: "/" },
    { name: 'About', href: "/About" },
    { name: 'Menu', href: "/Menu/Rolls" },
];

const menuLinks = [
    { icon: <BiSolidSushi />, href: "/Menu/Rolls", name: "ROLLS" },
    { icon: <GiSushis />, href: "/Menu/Sushi", name: "SUSHI SETS" },
    { icon: <CiBowlNoodles />, href: "/Menu/HotDishes", name: "HOT DISHES" },
    { icon: <LuSalad />, href: "/Menu/Salads", name: "SALADS" },
    { icon: <LuSoup />, href: "/Menu/Soups", name: "SOUPS" },
    { icon: <MdOutlineFastfood />, href: "/Menu/BusinessLunch", name: "BUSINESS LUNCH" },
    { icon: <LuDessert />, href: "/Menu/Desserts", name: "DESSERTS" },
    { icon: <MdOutlineLocalDrink />, href: "/Menu/Benerages", name: "BENERAGES" },
]


const Navbar = () => {
    const pathname = usePathname();

    const { handleCartClick, cartCount } = useShoppingCart();

    return (
        <header className='justify-center w-full flex flex-col bg-white mb-8 border-b  '>
            <div className='flex items-center justify-between   w-[80%] mx-auto'>
                <Link href={'/'}>
                    <h1 className='text-2xl md:text-4xl font-bold text-black  transition duration-100 hover:text-black/60'>SUSHI X</h1>
                </Link>
                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                    {links.map((link, idx) => (
                        <div key={idx}>
                            {pathname === link.href ? (
                                <Link className="text-3xl font-semibold text-black" href={link.href}>
                                    {link.name}
                                </Link>
                            ) : (
                                <Link href={link.href} className="text-3xl font-semibold text-gray-600 transition duration-100 hover:text-black">
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>


                <SignInButton />
                <div className="flex divide-x border-r sm:border-l relative">
                    <Button variant={"outline"} className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
                        onClick={() => handleCartClick()}
                    >
                        <ShoppingBagIcon />
                        <span className="hidden text-sx font-semibold text-gray-500 sm:block">
                            Cart
                        </span>

                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-2 dark:border-gray-900">{cartCount}</div>
                    </Button>
                </div>
            </div>
            <div className='flex items-center justify-between  w-[80%] my-4 mx-auto '>
                {
                    menuLinks.map((link, idx) => (
                        <div key={idx}>
                            <Link href={link.href} className=' text-3xl'>
                                {link.icon}
                            </Link>
                        </div>
                    ))
                }
            </div>


        </header>
    )
}

export default Navbar