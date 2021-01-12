const { create } = require("axios").default;
const remoteServerAddress = "http://localhost:8080";

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
    const response = await axios.post(
        `${remoteServerAddress}/login`,
        credentials
    ).catch(er => {
        console.log(er)
    });
    return response;
};

export default {
    login
};