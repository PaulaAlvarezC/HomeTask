import {FILTER_SERVICES, SELECTED_SERVICES} from '../../store/actions/services.action';

import { SERVICES } from  '../../utils/data/services';

const initialState = {
    services: SERVICES,
    filteredServices: [],
    selected: null
}

const ServiceReducer = (state = initialState, action) => {
  switch(action.type) {
        case SELECTED_SERVICES:
            return {
                ...state,
                selected: state.services.find(service => service.id === action.servicesId)
            }
        case FILTER_SERVICES:
            return {
                ...state,
                filteredServices: state.services.filter(service => service.category === action.categoryId)
            }
        default:
            return state;
  }
}

export default ServiceReducer;