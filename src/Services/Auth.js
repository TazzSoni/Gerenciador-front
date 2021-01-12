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
    try {
        const response = await axios.post(
            `${remoteServerAddress}/login`,
            credentials
        ).catch(er => {
            console.log(er)
        });
        return response;
    } catch (error) {
        return false
    }
};

function isAutenhenticated() {
    return true
}

export default {
    login,
    create,
    isAutenhenticated
};