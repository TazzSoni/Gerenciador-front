const { create } = require("axios").default;
const remoteServerAddress = "http://localhost:8080";
const validation = false;


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
            `${remoteServerAddress}/login`,
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



const isAutenhenticated = () => localStorage.getItem('app-token') !== null;

export default {
    login,
    create,
    isAutenhenticated
};