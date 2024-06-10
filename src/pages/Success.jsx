import React, { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext';
// import RouterApp from '../routes/RouterApp'
import Home from "../pages/Home"

function Success() {

    const { resetCart } = useContext(CartContext);

    useEffect(() => {
        resetCart()
    }, [resetCart])
    
    return (
        <Home />
        // <>
        //     <h2>Felicitaciones tu pago està listo!! </h2>
        //     <p>Nos pondremos en contacto para  coordinar el envío..</p>
        // </>
    )
}

export default Success