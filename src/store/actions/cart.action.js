import { URL_API } from '../../utils/data/database';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CONFIRM_ITEM = 'CONFIRM_ITEM';

export const addItem = item => ({

    type: ADD_ITEM,
    item,   
})

export const removeItem = itemId => ({
    type: REMOVE_ITEM,
    itemId,
})

export const confirmCart = (payload, total) => {
    return async dispatch => {
        try { 

            const response = await fetch(`${URL_API}/orders.json`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items: payload,
                    total,
                }),
            });
            
            const resutl = await response.json();
            //console.log(resutl);

            dispatch({
                type: CONFIRM_ITEM,
                confirm: true,
            });
        }
        catch (error) {
            console.warn(error.message);
        }

    }
}