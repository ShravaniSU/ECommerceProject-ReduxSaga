import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const addToCart = (data) => {
    console.log("Action Add to cart is called", data);
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const removeFromCart = (data) => {
    console.log("Action remove from cart is called", data);
    return {
        type: REMOVE_FROM_CART,
        data: data
    }
}

export const emptyCart = () => {
    console.log("Action empty cart is called");
    return {
        type: EMPTY_CART,
    }
}