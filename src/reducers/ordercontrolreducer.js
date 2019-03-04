import {
    FETCH_EVERY_ORDER_FOR_THIS_USER,
    ERROR_FETCHING_ORDER_LIST_FOR_USER,
    DELETE_THIS_ORDER,
    CHECK_OUT_ORDER,
    RESET_CURRENT_ORDER_STATES,
    SET_THIS_ORDER_AS_CURRENT_ORDER
} from '../actions/types';

let initialState = {
    ORDERLIST: [],
    CURRENTORDER: {},
    TOTAL: 0,
    ITEMQUANTITY: {},
    CLONEITEMQUANTITY: {},
    URL: ''
}

export const ORDER_LIST_REDUCER = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EVERY_ORDER_FOR_THIS_USER:
            return {
                ...state,
                ORDERLIST: action.ORDERLIST
            }
        case ERROR_FETCHING_ORDER_LIST_FOR_USER:
            return {
                ORDERLIST: [],
                CURRENTORDER: {},
                TOTAL: 0,
                ITEMQUANTITY: {},
                CLONEITEMQUANTITY: {},
                URL: ''
            }
        case DELETE_THIS_ORDER:
            return {
                ORDERLIST: state.ORDERLIST.filter(order => (order._id !== action.ID)),
                CURRENTORDER: {},
                TOTAL: 0,
                ITEMQUANTITY: {},
                CLONEITEMQUANTITY: {},
                URL: ''
            }
        case CHECK_OUT_ORDER:
            return {
                ...state,
                URL: '/my_orders',
                ORDERLIST: state.ORDERLIST.filter(order => (order._id !== action.ID)),
            }
        case SET_THIS_ORDER_AS_CURRENT_ORDER:
            let tempItemQuantity = {};
            let tempTotal = 0;
            let currentOrder = action.CURRENTORDER;
            for (var item in currentOrder.items) {
                tempTotal += (
                    currentOrder.items[item].quantity *
                    currentOrder.items[item].price
                );
                tempItemQuantity[
                    currentOrder.items[item].productID
                ] = currentOrder.items[item].quantity;
            }
            return {
                ...state,
                CURRENTORDER: action.CURRENTORDER,
                TOTAL: tempTotal,
                ITEMQUANTITY: tempItemQuantity,
                CLONEITEMQUANTITY: JSON.parse(JSON.stringify(tempItemQuantity)),
                URL: action.URL
            }
        case RESET_CURRENT_ORDER_STATES:
            return {
                ...state,
                CURRENTORDER: {},
                TOTAL: 0,
                ITEMQUANTITY: {},
                CLONEITEMQUANTITY: {},
                URL: ''
            }
        default:
            return state;
    }
}