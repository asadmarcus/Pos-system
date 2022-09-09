export const addCart = id => {
    return {
        type : "ADD_TO_CART",
        payload: id
    }
}

export const inc = id => {
    return {
        type : "INC",
        payload: id
    }
}

export const dec = id => {
    return {
        type : "DEC",
        payload: id
    }
}

export const removeItem = id => {
    return {
        type : "REMOVE",
        payload: id
    }
}

export const resetCart = () => {
    return {
        type: "RESET"
    }
}
