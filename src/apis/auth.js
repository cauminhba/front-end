
import BaseService from './baseService';
const config = require("../configs/config.json").auth;

const Auth = {
    login(data) {
        return BaseService.post(config.auth_login_apiendpoint, data);
    },
    
    logout(data) {
        return BaseService.post(config.auth_logout_apiendpoint, data);
    }
};


export default Auth
