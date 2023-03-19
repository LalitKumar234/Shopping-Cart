import React, { useEffect, useState } from 'react'
import './Home.css'

const Home = ({addToCart}) => {
    const [products, setProducts] = useState([])
    const URL = 'https://dummyjson.com/products'
    const fetchData = async () => {
        const res = await fetch(URL)
        const data = await res.json()
        setProducts(data.products)
    }
    useEffect(() => {
        fetchData()
        console.log(products, 'hiug')
    }, [])
    return (
        <div className='homeContainer'>
            <div className='productsContainer'>

                <div className="products">
                    {
                        Array.isArray(products) && products.map((product, index) => {
                            return <div className="product" key={index}>
                                <div className="productImage">
                                    <img src={product.images[0]} alt="" />
                                </div>
                                <div className="productDetails">
                                    <h4 className="productName">{product.brand}</h4>
                                    <p className='description'>{product.description}</p>
                                    <div className="price">
                                        <span>${product.price}</span>
                                        <button className='add' onClick={()=>addToCart(product.brand, product.images[0], product.price, product.id, index)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>


            </div>
        </div>
    )
}

export default Home