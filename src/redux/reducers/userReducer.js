import {
    LOGGED_TRUE,
    LOGGED_FALSE,
    LOGIN_FAIL,
    LOGOUT,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    LOGIN_FETCH,
    SET_FORM_DATA
} from '../types';

import checkUser from '../../services/auth/checkUser';
import { setUser, guest, setFormData } from './asyncActions';
import login from '../../services/auth/login';

var initState = {
    loading: false,
    user: null,
    error: false,
    formData: {}
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_FORM_DATA:
            return { ...state, formData: action.payload }
        case LOGIN_FETCH:
            return { ...state, loading: action.loading }
        case LOGGED_TRUE:
            return {
                ...state,
                user: action.payload,
                loading: action.loading,
                formData: {}
            }
        case LOGGED_FALSE:
            return { ...state, user: null }
        default:
            return state
    }
}

export const authCheck = () => async (dispatch, getState) => {

    const user = await checkUser;
    if (user) {
        dispatch(setUser(user))
    } else {
        dispatch(guest())
    }
}

// export const setForm = () => (dispatch, getState) => {
// }

export const loginUser = () => async (dispatch, getState) => {
    const form = getState().formData;
  login(form.email, form.password)
    dispatch(setUser('dlsk'))
}

