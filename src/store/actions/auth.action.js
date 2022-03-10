import { URL_AUTH_SIGNIN, URL_AUTH_SIGNUP } from "../../utils/data/database";

export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';

export const signin = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_AUTH_SIGNIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await response.json();
        console.log("data: "+data);
        console.log(SIGNIN);

        dispatch({
            type: SIGNIN,
            token: data.idToken,
            userId: data.localId
        });
        
    }
};

export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch(URL_AUTH_SIGNUP, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true
            })
        });
        
        const data =  await response.json();
        console.log(data);

        /*console.warn(data);*/

        dispatch({
            type: SIGNUP,
            token: data.idToken,
            userId: data.localId
        });
    }
}