import {
    AuthenActionType
} from '../actions/actionsTypes'
const initialState = require("./initialstate.json").auth;

const auth = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_AUTH_PROGRESS": {
            return {
                ...state,
                fetching: true,
                fetched: false,
                error: null,
                isLoggedIn: false
            };
        }

        case "FETCH_AUTH_ERROR": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        }

        case AuthenActionType.FETCH_LOGIN_SUCCESS: {
            console.log('FETCH_LOGIN_SUCCESS')
            return {
                ...state,
                fetching: false,
                fetched: true,
                isLoggedIn: true,
                authdetails: action.payload
            };
        }

        case "FETCH_LOGOUT_SUCCESS": {
            return {
                ...state,
                fetching: false,
                fetched: false,
                isLoggedIn: false,
                authdetails: null
            };
        }

        default: {
            return state;
        }
    }

}

export default auth;