import React, { useEffect, useState } from 'react'
import './CartItems.css'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const CartItems = ({ showCart, addProduct, reRender,  handleRender}) => {
    const [total, setTotal] = useState(0)
    
    const [qty, setQuantity] = useState(0)

    

    const increment = (id) => {
        handleRender()
        addProduct.map((pQty) => {
            if (pQty.id === id) {
                if (pQty.qty !== 0) {
                    pQty.qty = pQty.qty + 1
                }
            }
            else {

            }

        })
    }
    const decrement = (id, index) => {
        handleRender()
        if (addProduct[index].qty <= 1) {
            addProduct.splice(index, 1)
        }
        else {
            addProduct.map((pQty) => {
                if (pQty.id === id) {
                    pQty.qty = pQty.qty - 1
                    setQuantity(pQty.qty)
                }
                else {
                    return
                }
            })
        }

    }
    const itemTotal = () => {
        if (addProduct) {
            const initialPrice = 0;
            const total = addProduct.reduce((accumulator, current) => accumulator + current.price * current.qty, initialPrice)
            setTotal(total)
        }

    }
    useEffect(() => {
        itemTotal()
        console.log(total)
    }, [total, addProduct, reRender, qty])

    return (
        <div className='cartMain' style={{
            visibility: showCart ? 'visible' : 'hidden',
            transform: showCart ? 'translate(0px, 0px)' : 'translate(20rem, 0rem)'
        }}>
            <div className='cartContainer'
                >{
                    addProduct.length === 0 ? <div>Your Cart is Empty</div>
                        : <div className="cartInner">
                            <div className="cartItems">
                                {
                                    addProduct.length !== 0 && addProduct.map((product, index) => {
                                        return (<div className="cartItem" key={index}>
                                            <img src={product.image} alt="" />
                                            <div className="details">
                                                <h4 className="itemBrand">{product.productName}</h4>
                                                <div className="itemPrice">${product.price}</div>
                                                <div className="productQty">
                                                    <button onClick={() => increment(product.id, index)}><AiOutlinePlus /></button>
                                                    <span>{product.qty}</span>
                                                    <button onClick={() => decrement(product.id, index)}><AiOutlineMinus /></button>
                                                </div>
                                            </div>
                                        </div>)
                                    })
                                }
                            </div>
                        </div>
                    }

            </div>
            <div className="totalContainer">
                <p>Total</p>
                <h2>${total}</h2>
            </div>
        </div>
        
    )
}

export default CartItems