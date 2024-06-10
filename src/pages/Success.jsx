import React, { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext';
import Home from "../pages/Home"

function Success() {

    const { resetCart } = useContext(CartContext);

    useEffect(() => {
        resetCart()
    }, [resetCart])
    
    return (
        <Home />
    )
}

export default Success