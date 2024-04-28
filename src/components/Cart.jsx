import { useContext, useState } from "react"
import { faClose, faShoppingCart } from "@fortawesome/free-solid-svg-icons"

import { CartContext } from "../context/CartContext"

import Button from "./Button";
import Modal from "./Modal";
import CartModal from "./CartModal"

function Cart() {
    const { productsCartList } = useContext(CartContext);
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="cart__container">
                <Button
                    icon={faShoppingCart}
                    className= {productsCartList.length ? "cart__navbar-button-in": "cart__navbar-button"}
                    action={() => setOpen(!open)}
                    disabled={!productsCartList.length}
                />
                {
                    productsCartList.length ?
                        <div className="cart__badge">
                            <span>
                                {productsCartList.reduce(
                                    (acc, product) => acc + product.quantity,
                                    0
                                )}
                            </span>
                        </div>
                    : undefined 
                }
            </div>
            <Modal show={open} onClose={()=>setOpen(false)}>
                <>
                <div className="modal__header">
                    <Button
                        icon={faClose}
                        className="modal__close"
                        action={() => setOpen(!open)}
                    />
                </div>
                {
                        productsCartList.map(
                            data =>
                                <CartModal
                                    key={data.id}
                                    {...data}
                                />
                        )
                    }
                </>
            </Modal>
        </>
    )
}

export default Cart