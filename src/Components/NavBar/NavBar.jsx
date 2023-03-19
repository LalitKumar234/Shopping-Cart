import React, { useEffect } from 'react'
import './NavBar.css'
import { FiShoppingCart } from 'react-icons/fi';

const NavBar = ({setShowCart, showCart, productCounter, reRender}) => {
    useEffect(()=>{

    }, [reRender])
    return (
        <div className='navBarContainer'>
            <div className="navInner">
                <div className="logo">
                    <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-campus-recreation-university-nebraska-lincoln-30.png" alt="" />
                </div>
                <div className="cartIcon" onClick={()=>setShowCart(!showCart)}><FiShoppingCart size={25} />
                    <div className="productCount">{productCounter}</div>
                </div>
            </div>
        </div>
    )
}

export default NavBar