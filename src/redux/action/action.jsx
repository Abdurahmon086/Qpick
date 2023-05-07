export const addLike = (product) => {
    return {
        type: "ADDLIKE",
        payload: product
    }
}

export const delLike = (product) => {
    return {
        type: "DELIKE",
        payload: product
    }
}

export const addData = (product) => {
    return {
        type: "ADD_DATA",
        payload: product
    }
}

export const inc = (product) => {
    console.log(product);
    return {
        type: "INC",
        payload: product
    }
}
export const dec = (product) => {
    return {
        type: "DEC",
        payload: product
    }
}

export const remove = (product) => {
    return {
        type: "REMOVE",
        payload: product
    }
}