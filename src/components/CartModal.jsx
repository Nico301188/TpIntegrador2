import React from 'react'
import Counter from './Counter'

function CartModal({id, productData, quantity}) {

    return (
        <div className='cart-modal__container'>
            <img src={productData.photo} alt={productData.sDescription} />
            <h2>
                {productData.name}
            </h2>
                <span>({productData.brand})</span>
            <p>{productData.price * quantity}</p>
            <p>{productData.category}</p>
            {/* <p>{productData.freeDeliver}</p> */}
            <Counter 
                id={id} 
                productData={productData}
                initialValue={quantity}
                />
        </div>

    )
}

export default CartModal