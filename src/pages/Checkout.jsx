import React, { useContext, useEffect, useState } from 'react'
import { Wallet } from '@mercadopago/sdk-react';

import { CartContext } from '../context/CartContext';

import { postPreferenceMP } from '../util/api';

function Checkout({product, quantity}) {
    const [prefId, setPrefId] = useState("")
    const { productsCartList } = useContext(CartContext);

    useEffect(() => {
        console.log(productsCartList)
        const itemsList = productsCartList.map(({ product, quantity }) => ({
            id: product._id,
            title: product.title,
            picture_url: product.imgUrl,
            quantity: quantity,
            unit_price: product.price
        }))
        postPreferenceMP({
            items: itemsList
        })
            .then(data => setPrefId(data.preferenceId))
            .catch(console.log)
    }, [productsCartList])

    return (
        <div>
            {
                productsCartList.map(
                    // data =>
                        // <div className='cart-modal__container'>
                        //     <img src={data.product.imgUrl} alt={data.product.sDescription} />
                        //     <h2>
                        //         {data.product.name}
                        //     </h2>
                        //     <span>({data.product.brand})</span>
                        //     <p>{data.product.price * data.quantity}</p>
                        //     <p>{data.product.category}</p>
                        //     <p>{data.product.freeDeliver}</p>
                        // </div>
                                <div className='cart-modal__container'>
                                <img src={product.imgUrl} alt={product.sDescription} />
                                <h2>
                                    {product.name}
                                </h2>
                                <span>({product.brand})</span>
                                <p>{product.price * quantity}</p>
                                <p>{product.category}</p>
                                <p>{product.freeDeliver}</p>
                            </div>
                )

            }
            <div>
            {
                prefId ?
                    <Wallet initialization={{ preferenceId: prefId }} customization={{ texts: { valueProp: 'smart_option' } }} />
                    : undefined
            }
            </div>
        </div>
    )
}

export default Checkout