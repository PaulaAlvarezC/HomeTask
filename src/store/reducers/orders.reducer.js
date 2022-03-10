import { DELETE_ORDERS, GET_ORDERS } from "../actions/orders.action";

const initialState = {
    orders: [],
}

const OrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        case DELETE_ORDERS:
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== action.orderId)
            }
        default:
            return state;
    }
}

export default OrderReducer;