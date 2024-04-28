import React, { useState } from 'react'
import { CartContext } from './CartContext'

function CartProvider({children}) {
    const [productsCartList, setProductsCartList] = useState([])
    
    const addProduct = data => {
        const productFinded = productsCartList.find(product => product.id === data.id)
        if (productFinded) {
            setProductsCartList(
                productsCartList.map(
                    product => product.id === data.id ? data : product
                )
            )
        } else {
            setProductsCartList([...productsCartList, data])
        }
    }

    const removeProduct = id => {
        const productFinded = productsCartList.find(product => product.id === id)
        if (productFinded?.quantity > 1) {
            setProductsCartList(
                productsCartList.map(
                    product => product.id === id ? {
                        ...product,
                        quantity: product.quantity -1
                    } : product
                )
            )
        } else {
            setProductsCartList(productsCartList.filter( product => product.id !== id ))
        }
    }

    return (
        <CartContext.Provider value={{
            productsCartList,
            addProduct,
            removeProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider