import React from 'react'
import Counter from './Counter'

function CartModal({id, productData, quantity, edit = true}) {

    return (
        <div className='cart-modal__container'>
            <img src={productData.imgUrl} alt={productData.sDescription} />
            <h2>
                {productData.name}
            </h2>
                <span>({productData.brand})</span>
            <p>{productData.price * quantity}</p>
            <p>{productData.category}</p>
            {/* <p>{productData.freeDeliver}</p> */}
            {
                edit ?
                <Counter 
                    _id={productData._id} 
                    productData={productData}
                    initialValue={quantity}
                    />: undefined
            }
        </div>

    )
}

export default CartModal