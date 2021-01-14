const { create } = require("axios").default;
const remoteServerAddressLogin = "http://localhost:8080/login";
const remoteServerAddress = "http://localhost:8080/api";


const axios = create({
    headers: {
        post: {
            Authorization: localStorage.getItem("accessToken"),
        },
        get: {
            Authorization: localStorage.getItem("accessToken"),
        },
    },
});

async function login(credentials) {
    try {
        const response = await axios.post(
            `${remoteServerAddressLogin}`,
            credentials
        ).catch(er => {
            console.log(er)
        });
        localStorage.setItem('app-token', response.data)
        return response;
    } catch (error) {
        return false
    }
};

async function get(endpoint) {
    try {
        const token = localStorage.getItem('app-token')
        const response = await axios.get(`${remoteServerAddress}${endpoint}`, { headers: { "Authorization": `${token}` } });
        return response;
    } catch (error) {
        return false;
    }
}



const isAutenhenticated = () => {
    // return true;
    return localStorage.getItem('app-token') !== null
};

export default {
    login,
    create,
    isAutenhenticated,
    get

};