export const SELECTED_SERVICES = 'SELECTED_SERVICES';
export const FILTER_SERVICES = 'FILTER_SERVICES';

export const selectServices = (id) => ({
  
        type: SELECTED_SERVICES,
        servicesId: id
    
});

export const filterServices = (id) => ({

        type: FILTER_SERVICES,
        categoryId: id

});