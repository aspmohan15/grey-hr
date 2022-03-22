
import { ACTION_TYPE } from '../constants/';

const initialState = {}

const registerReducer = (state = { initialState }, action) => {

    switch (action.type) {

        case ACTION_TYPE.REGISTER_REQUEST:
            return {};

        case ACTION_TYPE.REGISTER_SUCCESS:
            return {};

        case ACTION_TYPE.REGISTER_FAIL:
            return {};

        default:
            return {};
    }
};

export default registerReducer;