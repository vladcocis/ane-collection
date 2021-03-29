import React, { createContext, useReducer } from 'react'

const initialState = []

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const id = action.payload.productId
            const entry = state.find((it) => it.id === id)
            console.log(action)

            if (entry) {
                return state.map((it) => {
                    if (it.id === id) {
                        return {
                            ...it,
                            amount: it.amount + 1
                        }
                    }
                    return it
                })
            }

            return [...state, { id, amount: 1 }]
    }
}

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider