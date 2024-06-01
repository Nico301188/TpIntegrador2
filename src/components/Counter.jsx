import React, { useContext, useEffect, useState } from 'react'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import { CartContext } from '../context/CartContext';

import Text from './Text'
import Button from './Button'

export default function Counter({ _id, productData, initialValue = 0 }) {

    const [count, setCount] = useState(initialValue)
    const { addProduct, removeProduct, productsCartList } = useContext(CartContext);

    useEffect(() => {
        const product = productsCartList.find(product => product.product._id === _id)
        setCount(product?.quantity || 0)
    }, [productsCartList, _id])

    const decrement = e => {
        e.stopPropagation()
        if (count > 0) setCount(count - 1)
        removeProduct(_id)
    }

    const increment = e => {
        e.stopPropagation()
        setCount(count + 1)
        addProduct({
            _id,
            productData,
            quantity: count + 1,
        })
    }

    return (
        <div className="counter__container">
            <Button
                icon={faMinus}
                className="counter__btn"
                action={decrement}
                disabled={count === 0}
            />
            <Text
                renderAs="p"
                content={count}
                componentsProps={{ className: "counter__count-text" }}
            />
            <Button
                icon={faPlus}
                className="counter__btn"
                action={increment}
            />
        </div>
    )
}
