import React from 'react'
import Counter from './Counter'

function CartModal({ product, quantity}) {

    return (
        <div className='cart-modal__container'>
            <img src={product.imgUrl} alt={product.sDescription} />
            <h2>
                {product.name}
            </h2>
                <span>({product.brand})</span>
            <p>{product.price * quantity}</p>
            <p>{product.category}</p>
            {/* <p>{productData.freeDeliver}</p> */}
            {
                <Counter 
                    _id={product._id} 
                    product={product}
                    initialValue={quantity}
                    />
            }
        </div>

    )
}

export default CartModal