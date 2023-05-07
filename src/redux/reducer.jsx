const initialState = {
    likes: [],
    addData: [],
    data: [],
    count: 1
}

const reducerStore = (state = initialState, action) => {
    switch (action.type) {
        case "ADDLIKE":
            const { id, title } = action.payload
            const template = state.likes.filter(item => id === item.id)
            if (template.length > 0) {
                return state
            } else {
                return {
                    ...state,
                    likes: [
                        ...state.likes, {
                            id,
                            title
                        }],
                }
            }

        case "ADD_DATA":
            const products = action.payload
            console.log(products);
            const templateData = state.data.filter(item => products.id === item.id)
            if (templateData.length > 0) {
                return state
            } else {
                console.log(state);
                return {
                    ...state,
                    data: [...state.data, { ...products, qty: 1 }]
                }
            }

        case "INC":
            const tempstate1 = state.data.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, qty: item.qty + 1 };
                } else {
                    return item;
                }
            });
            return { ...state.data, data: [...tempstate1] };

        case "DEC":
            const tempstate2 = state.data.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, qty: item.qty - 1 };
                } else {
                    return item;
                }
            });
            return { ...state.data, data: [...tempstate2] };

        case "REMOVE":
            const tempstate3 = state.data.filter(
                (item) => item.id !== action.payload
            );

            return { ...state.data, data: [...tempstate3] };

        default: return state;


    }
}

export default reducerStore;
