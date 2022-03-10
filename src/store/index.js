import { applyMiddleware, combineReducers, createStore } from 'redux';

import AuthReducer from './reducers/auth.reducer';
import CartReducer from './reducers/cart.reducer';
import CategoryReducer from './reducers/category.reducer';
import OrdersReducer from './reducers/orders.reducer';
import ServiceReducer from './reducers/services.reducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
    services: ServiceReducer,
    categories: CategoryReducer,
    cart: CartReducer,
    orders: OrdersReducer,
    auth: AuthReducer,

});

export default createStore(RootReducer, applyMiddleware(thunk));