import { combineReducers, createStore } from 'redux';

import ServiceReducer from './reducers/services.reducer';
import categoryReducer from './reducers/category.reducer';

const RootReducer = combineReducers({
    services: ServiceReducer,
    categories: categoryReducer
});

export default createStore(RootReducer);