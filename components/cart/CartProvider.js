import axios from 'axios'
import _ from 'lodash'
import React, { createContext, useReducer } from 'react'

let initialState = []

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const id = action.payload.productId
            const entry = state.find((it) => it.id === id)
            let currentCart

            if (entry) {
                currentCart = state.map((it) => {
                    if (it.id === id) {
                        return {
                            ...it,
                            amount: it.amount + 1
                        }
                    }
                    return it
                })

                // emergency localStorage eraser
                //localStorage.removeItem('cart')

                if (JSON.parse(localStorage.getItem('cart')) !== currentCart && currentCart.length) {
                    localStorage.setItem('cart', JSON.stringify(currentCart))
                    //console.log(JSON.parse(localStorage.getItem('cart')))
                }

                return currentCart
            }

            return [...state, { id, amount: 1 }]

        case 'ADJUST_AMOUNT':
            const { amount } = action.payload

            return _.map(state, (it) => {
                if (items.id === id) {
                    return {
                        ...it,
                        amount
                    }
                }

                return item
            })

        case 'LOAD_FROM_LOCALSTORAGE':
            const items = action.payload

            if (!items || items === null) {
                return state
            }

            return [...state, ...items]
    }
}

export const withProducts = async () => {
    try {
        const response = await axios.get('/api/cart/get-all-products')

        if (response.status === 200 && response.data.status === 200) {
            return response.data.payload
        }
    } catch (err) {
        console.error(err)
    }
}

export const getProductsTotalCount = (products, items) => {
    let totalCount = 0

    items.map(({ id, amount }) => {
        totalCount += amount
    })

    return totalCount
}

export const getTotalSum = (products, items) => {
    return items
        .map(({ id, amount }) => ({
            product: products.find((p) => (p.id === id)),
            amount,
        }))
        .map(({ product: { product_price }, amount }) => amount * product_price)
        .reduce((acc, cur) => acc + cur, 0)
}

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [storageLoaded, setStorageLoaded] = React.useState(false)
    const [state, dispatch] = useReducer(reducer, initialState)

    React.useEffect(() => {
        if (localStorage) {
            setStorageLoaded(true)
            dispatch({ type: "LOAD_FROM_LOCALSTORAGE", payload: JSON.parse(localStorage.getItem('cart')) })
        }
    }, [])

    if (storageLoaded) {
        return (
            <CartContext.Provider value={{ state, dispatch }}>
                {children}
            </CartContext.Provider>
        )
    } else {
        return 'Fetching...'
    }
}

export default CartProvider