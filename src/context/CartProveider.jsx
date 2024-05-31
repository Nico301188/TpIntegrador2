import React, { useEffect,useState } from 'react'
import { CartContext } from './CartContext'
import { editCart, getCart, postCart } from '../util/api'

function CartProvider({ children }) {
    const [idCart, setIdCart] = useState(null)
    const [productsCartList, setProductsCartList] = useState([])

    useEffect(() => {
        const storedIdCart = localStorage.getItem("cartId")
        if (storedIdCart) {
            getCart(storedIdCart)
                .then(({ cart }) => {
                    setProductsCartList(cart.items)
                    setIdCart(storedIdCart)
                })
        }
    }, [])

    // const addProduct = data => {
    //     const productFinded = productsCartList.find(product => product.id === data.id)
    //     if (productFinded) {
    //         setProductsCartList(
    //             productsCartList.map(
    //                 product => product.id === data.id ? data : product
    //             )
    //         )
    //     } else {
    //         setProductsCartList([...productsCartList, data])
    //     }
    // }
    const addProduct = ({ _id, quantity }) => {
        const data = {
            quantity,
            product: _id
        }
        const prodFinded = productsCartList.find(prod => prod.product?._id === _id)

        if (prodFinded) {
            const newCart = productsCartList.map(
                prod => prod.product?._id === data.product ? data : prod
            )
            editCart(idCart, newCart)
                .then(({ cart }) => setProductsCartList(cart.items))
        } else {
            if (!idCart) {
                postCart([data])
                    .then(({ cart }) => {
                        localStorage.setItem("cartId", cart._id)
                        setIdCart(cart._id)
                        setProductsCartList(cart.items)
                    })
            } else {
                const newCart = [...productsCartList, data]
                editCart(idCart, newCart)
                    .then(({ cart }) => setProductsCartList(cart.items))
            }
        }
    }

    const removeProduct = id => {
        const productFinded = productsCartList.find(product => product.product?._id === id)
        if (idCart) {
            if (productFinded?.quantity > 1) {
                // setProductsCartList(
                //     productsCartList.map(
                //         product => product.product._id === id ? {
                //             ...product,
                //             quantity: product.quantity - 1
                //         } : product
                //     )
                // )
                const newCart = productsCartList.map(
                    prod => prod.product._id === id ? {
                        ...prod,
                        quantity: prod.quantity -1
                    } : prod
                )
                editCart(idCart, newCart)
                    .then(({ cart }) => setProductsCartList(cart.items))
            } else {
                // setProductsCartList(productsCartList.filter( product => product.id !== id ))
                const newCart = productsCartList.filter(prod => prod.product?._id !== id)
                editCart(idCart, newCart)
                    .then(({ cart }) => setProductsCartList(cart.items))
            }
        }
    }

    const resetCart = () => {
        setIdCart(null)
        localStorage.removeItem("cartId")
        setProductsCartList([])
    }
    return (
        <CartContext.Provider value={{
            productsCartList,
            addProduct,
            removeProduct,
            resetCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider