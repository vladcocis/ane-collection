import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../components/cart/CartProvider'
import _ from 'lodash'

const CartPage = () => {
    const { state: items } = useContext(CartContext)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const findProduct = (id) => products.find((p) => p.id === id)

    useEffect(() => {
        async function fetchProducts() {
            const response = await axios.get(`/api/products`)

            if (response.status === 200) {
                setProducts(response.data.payload)
                setLoading(true)
            }
        }

        fetchProducts()
    }, [])

    return loading ? (
        <div style={{ padding: '5rem' }}>
            <h1>Cart ITEMS</h1>

            <table border="1">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Amount</td>
                    </tr>
                </thead>

                <tbody>
                    {_.map(items, ({ id, amount }) => {
                        const product = findProduct(id)
                        console.log(product)

                        return (
                            <tr>
                                <td>{id}</td>
                                <td>{product.product_name}</td>
                                <td>{product.product_price}</td>
                                <td>{amount}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    ) : <h1>Loading</h1>
}



export default CartPage