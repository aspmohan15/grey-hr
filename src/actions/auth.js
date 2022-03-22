import { ACTION_TYPE } from '../constants';
import * as api from '../api/index'
import { BrowserRouter } from 'react-router-dom';

// export const signin = (formData, navigateRouter) => async (dispatch) => {
export const signin = (formData, navigateRouter) => async (dispatch) => {

    let token;
    try {
        dispatch({ type: ACTION_TYPE.LOGIN_REQUEST });
        const { data } = await api.signIn(formData);
        token = data.token;

        dispatch({ type: ACTION_TYPE.LOGIN_SUCCESS, data: data.currentUser });
        setTimeout(() => {
            navigateRouter('/empinfo')
        }, 1000)

    } catch (error) {
        dispatch({ type: ACTION_TYPE.LOGIN_FAIL });
    }

    try {
        dispatch({ type: ACTION_TYPE.EMPLOYEEMYDETAIL_REQUEST });
        const { data } = await api.getMe(token);
        dispatch({ type: ACTION_TYPE.EMPLOYEEMYDETAIL_SUCESS, employeeData: data });

        // dispatch({ type: REGISTER, data });

    } catch (error) {
        dispatch({ type: ACTION_TYPE.EMPLOYEEMYDETAIL_FAIL });

    }
};

export const signup = (formData, navigateRouter) => async (dispatch) => {
    // export const signup = (formData, navigateRouter) => async (dispatch) => {
    try {
        const data = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        navigateRouter('/register')

    } catch (error) {
        console.log(error);
    }
};
export const register = (formData, navigateRouter) => async (dispatch) => {
    // export const signup = (formData, navigateRouter) => async (dispatch) => {
    try {
        const { data } = await api.register(formData);
        console.log(data);
        if (data) {
            localStorage.setItem('employeeDetails', JSON.stringify(data))
            setTimeout(() => {
                navigateRouter('/empinfo')
            }, 1000)

        }

    } catch (error) {
        console.log(error);
    }
};
export const googleSignIn = (token, navigateRouter) => async (dispatch) => {
    // export const signup = (formData, navigateRouter) => async (dispatch) => {
    // console.log(token);
    try {
        const { data } = await api.getMe(token);
        const { employeeInformation } = data;

        // console.log(employeeInformation);

        if (employeeInformation === null || employeeInformation === undefined) {
            navigateRouter("/register")
            return;
        }
        setTimeout(() => {
            navigateRouter('/empinfo')
        }, 1000)

        dispatch({ type: SETEMPLOYEEMYDETAILS, employeeData: data });


        // dispatch({ type: REGISTER, data });

    } catch (error) {
        dispatch({ type: LOGINFAIL });

    }
};