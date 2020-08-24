import Auth from '../apis/auth';
import {
    AuthenActionType
} from './actionsTypes'

export function login(data) {
    return (dispatch, getState) => {
        Auth.login(data)
            .then(response => {
                console.log("login action ret data" + JSON.stringify(response));
                if(response.type === "success") {
                    localStorage.token = response.data.token.token;
                    localStorage.companyId = response.data.user.companyId;
                    dispatch({type: AuthenActionType.FETCH_LOGIN_SUCCESS, payload: response.data});
                } else {
                    localStorage.removeItem("token");
                }
            })
            .catch(err => {
                localStorage.removeItem("token failed");
            })
    }
}

export function logout(data = {}) {
    return (dispatch, getState) => {
        // dispatch({type: AuthenActionType.FETCH_LOGOUT_SUCCESS, payload: {}});
        localStorage.removeItem("token");
    }
}