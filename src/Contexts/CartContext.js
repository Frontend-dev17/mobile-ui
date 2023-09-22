import { createContext, useReducer } from 'react';

// Define initial state and reducer for your cart
const initialState = {
    cartItems: [], // An array to hold the cart items
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Add the product to the cart
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        case 'REMOVE_FROM_CART':
            // Remove a product from the cart
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload),
            };
        case 'INCREASE_QUANTITY':
            console.log(`Increasing quantity for item with id ${action.payload}`);
            // Find the item in cartItems and increase its quantity
            // Update the item's quantity in the cartItems array
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        case 'DECREASE_QUANTITY':
            console.log(`decreasing quantity for item with id ${action.payload}`);
            // Find the item in cartItems and decrease its quantity
            // If quantity becomes 0, remove the item from the cart
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                        : item
                ),
            };

        default:
            return state;
    }
};

// Create the CartContext
const CartContext = createContext();

// CartContext provider component
const CartProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ cartState, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };
