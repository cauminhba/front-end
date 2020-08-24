
export const settings = Object.freeze(
    {
        URI:{
            API_URL: 'http://localhost:8080',
        }
    }
);
let getHeaders = () => {
    let access_token = localStorage.token;
    console.log(localStorage)
    if (access_token) {
        return { Accept: 'application/json', 'Content-Type': 'application/json', 'Authorization': "Token " + access_token };
    } else {
        return { Accept: 'application/json', 'Content-Type': 'application/json' };
    }
};

let _apiCallWithData = async (endpoint, method, data, accessToken = '') => {
    const API_URL = settings.URI.API_URL + endpoint;
    try {
        // try {
        // } catch (error) {
        //     console.log("_apiCallWithData error ", error);
        // }
        let headers = '';
        if (accessToken === '') {
            headers = getHeaders();
        } else {
            headers = { Accept: 'application/json', 'Content-Type': 'application/json', 'accessToken': accessToken };
        }
        console.log("headers ", headers);
        console.log("data ", data);

        let res = await fetch(API_URL, {
            method: method,
            headers: headers,
            body: JSON.stringify(data)
            // body: data
        });

        console.log(res)


        if (res.status === 200) {
            let responseJson = await res.json();
            return ({ type: 'success', data: responseJson });
        } else {
            console.log("_apiCallWithData ===> An Request error was occurred when calling api!");
            return ({ type: 'error', data: "An Request error was occurred when calling api!" });
        }
    } catch (error) {
        console.log("_apiCallWithData ===> Exception was occurred when calling api!", JSON.stringify(error));
        return ({ type: 'error', data: "An Exception was occurred when calling api!" });
    }
};

let _apiCallWithoutData = async (endpoint, method) => {
    try {
        let API_URL = settings.URI.API_URL + endpoint;
        let headers = getHeaders();
        console.log("_apiCallWithoutData API_URL ", API_URL);
        console.log("_apiCallWithoutData header ", headers);

        let res = await fetch(API_URL, {
            method: method,
            headers: headers,
            credentials: 'omit',
        });
        if (res.status === 200) {
            let responseJson = await res.json();
            return ({ type: 'success', data: responseJson });
        } else {
            console.log("_apiCallWithoutData ===> An Request error was occurred when calling api!");
            return ({ type: 'error', data: "An Request error was occurred when calling api!" });
        }
    } catch (error) {
        console.log("_apiCallWithoutData ===> An Exception was occurred when calling api!", JSON.stringify(error));
        return ({ type: 'error', data: "An Exception was occurred when calling api!" });
    }
};

const api = {
    get: (endPoint) => {
        return _apiCallWithoutData(endPoint, 'GET');
    },

    getWithFullUrl: (url) => {
        return _apiCallWithoutData(url, 'GET');
    },

    post: (endPoint, data) => {
        return _apiCallWithData(endPoint, 'POST', data);
    },

    patch: (endPoint, data) => {
        return _apiCallWithData(endPoint, 'PATCH', data);
    },

    put: (endPoint, data) => {
        return _apiCallWithData(endPoint, 'PUT', data);
    },

    delete: (endPoint) => {
        return _apiCallWithoutData(endPoint, 'DELETE', {});
    }
};

export default api;