import {
    SET_FORM_DATA,
    CLEAR_FORM_DATA,
    REGISTER_FETCH,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_FETCH,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGGED_FETCH,
    LOGGED_TRUE,
    LOGGED_FALSE,
    LOGOUT
} from "../types"

export const setFormData =  (data) => ({
    type: SET_FORM_DATA,
    payload: data
})

export const guest = () => ({
    type: LOGGED_FALSE
});

export const setUser = (user) => ({
    loading: false,
    payload: user,
    type: LOGGED_TRUE
});

export const loginFetch = () => ({
    type: LOGIN_FETCH,
    loading: true
})