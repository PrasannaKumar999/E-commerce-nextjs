// context/CartContext.js
import React, { createContext, useReducer, useContext, useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			const existingItemIndex = state.findIndex(
				(item) => item?.id === action?.payload?.id
			);
			if (existingItemIndex >= 0) {
				const updatedCart = [...state];
				updatedCart[existingItemIndex].quantity += 1;
				return updatedCart;
			}
			return [...state, { ...action?.payload, quantity: 1 }];

		case "REMOVE_FROM_CART":
			return state.filter((item) => item?.id !== action?.payload?.id);

		case "CLEAR_CART":
			return [];

		case "LOAD_CART":
			return action?.payload;

		case "INCREASE_QUANTITY":
			return state.map((item) =>
				item.id === action.payload.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);

		case "DECREASE_QUANTITY":
			return state.map((item) =>
				item.id === action.payload.id && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			);

		default:
			return state;
	}
};

export const CartProvider = ({ children }) => {
	const [cart, dispatch] = useReducer(cartReducer, []);

	// Sync cart with localStorage
	useEffect(() => {
		const storedCart = localStorage.getItem("cart");
		if (storedCart) {
			dispatch({ type: "LOAD_CART", payload: JSON.parse(storedCart) });
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	return (
		<CartContext.Provider value={{ cart, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
