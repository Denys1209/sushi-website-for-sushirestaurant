import { Button } from '@/components/ui/button'
import React, { MouseEventHandler, useState } from 'react'
import CheckoutModel from './CheckoutModel';

const CheckoutButton = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <>
            <Button className="w-full bg-black text-white hover:opacity-75"
                onClick={toggleModal}
            >
                Checkout
            </Button>
            <CheckoutModel isOpen={isModalOpen} onClose={toggleModal}/>
        </>
    )
}

export default CheckoutButton