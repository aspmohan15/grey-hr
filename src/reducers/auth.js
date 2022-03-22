
import { ACTION_TYPE } from '../constants/';

const initialState = {}

const authReducer = (state = { initialState }, action) => {

    switch (action.type) {
        case ACTION_TYPE.LOGIN_REQUEST:
            // localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            // localStorage.setItem('employeeDetails', JSON.stringify({ ...action?.employeeData }));
            return {};

        case ACTION_TYPE.LOGIN_SUCCESS:
            // localStorage.setItem('employeeDetails', JSON.stringify({ ...action?.employeeData }));
            return {};

        case ACTION_TYPE.LOGIN_FAIL:
            return {};


        case ACTION_TYPE.LOGOUT:
            localStorage.clear()
            return { ...state, authData: null, employeeDetails: null };

        default:
            return {};
    }
};

export default authReducer;