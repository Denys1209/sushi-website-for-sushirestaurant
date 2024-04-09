import Link from 'next/link';
import React from 'react'
import { CiYoutube } from 'react-icons/ci';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-white h-11 p-2 shadow-2xl flex justify-between w-full'>
            <div className='flex justify-around gap-5 w-[30%]'>
                <div>
                    <p className='text-sm'>© 2024 All rights reserved «SUSHI X»</p>
                </div>
                <CiYoutube className='text-2xl' />
                <FaFacebookF className='text-2xl' />
                <FaInstagram className='text-2xl' />
            </div>

            <div className='w-[30%] text-center'>
                <Link href={"/About"}>
                    <p>About us</p>
                </Link>
            </div>

            <div className='w-[30%] text-end'>
                <p>+380 (97) 722 5555</p>
            </div>
        </footer>
    )
}

export default Footer;