import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALAZED_SUCCESS';

// Action Creator
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

// саночки
export const initialazeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData())
        promise.then(() => {
            dispatch(initializedSuccess())
        })
    }
}


// тут будут храниться настройки приложения 
const initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }

        default:
            return state;
    }

}

export default appReducer

