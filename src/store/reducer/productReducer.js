import { products } from "../../utils/data";

const data = {
    products: products,
    carts: []
}

const productReducer = (state = data,action) => {
    const {type, payload} = action
    switch(type) {
        default:
            return state
        case "ADD_TO_CART": 
            const itemInCart = state.carts.find(item => item.id === payload)
            const newItemCart = state.products.find(item => item.id === payload)
            if(!itemInCart) {
                return {
                    ...state,
                    carts: [...state.carts, newItemCart]
                }
            } else {
                return state
            }
        case "INC":
            const PriceProduct = state.products.find(item => item.id === payload).price
            const incCart = state.carts.map(item => {
                if(item.id === payload) {
                    return {
                        ...item,
                        price: item.price + PriceProduct
                    }
                } else {
                    return item
                }
                
            })
            return {
                ...state,
                carts: incCart
            }
        case "DEC":
            const PriceProduct2 = state.products.find(item => item.id === payload).price
            const decCart = state.carts.map(item => {
                if(item.id === payload) {
                    return {
                        ...item,
                        price: item.price - PriceProduct2
                    }
                } else {
                    return item
                }
                
            })
            return {
                ...state,
                carts: decCart
            }
        case "REMOVE":
                return {
                    ...state,
                    carts: state.carts.filter(item => item.id !== payload)
                }
        case "RESET": 
                return {
                    ...state,
                    carts: []
                }
    }
}

export default productReducer