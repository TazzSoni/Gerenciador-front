const { create } = require("axios").default;
// const remoteServerAddressLogin = "https://apirest-gerenciador.herokuapp.com/login";
// const remoteServerAddress = "https://apirest-gerenciador.herokuapp.com/api";
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
    const response = await axios.post(
        `${remoteServerAddressLogin}`,
        credentials
    ).catch(er => {
        if (er.response.status === 401) {
            const newResponse = { status: 401, message: "Login inválido" }
            return newResponse
        }
    });
    localStorage.setItem('app-token', response.data)
    return response;
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

async function cadastra(data) {

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    const url = `${remoteServerAddress}/pessoa`
    const response = await fetch(url, { headers, method: "post", body: JSON.stringify(data) })
    return response.status
}

async function post(endpoint, data) {
    const token = localStorage.getItem('app-token')
    console.log(data)
    const response = await axios
        .post(`${remoteServerAddress}${endpoint}`,
            data,
            { headers: { "Authorization": `${token}` } })
        .catch(er => {
            console.log(er.response)
            const newResponse = { status: er.response.status, message: "bad request" }
            return newResponse

        });
    console.log(response)
    return response;
}

async function put(endpoint, data) {
    const token = localStorage.getItem('app-token')
    console.log(remoteServerAddress, endpoint,
        data)
    const response = await axios
        .put(`${remoteServerAddress}${endpoint}`,
            data,
            { headers: { "Authorization": `${token}` } })
        .catch(er => {
            const newResponse = { status: er.response.status, message: "bad request" }
            return newResponse

        });
    console.log(response)
    return response;
}

async function excluir(endpoint) {
    const token = localStorage.getItem('app-token')
    console.log(endpoint)
    const response = await axios
        .delete(`${remoteServerAddress}${endpoint}`,
            { headers: { "Authorization": `${token}` } })
        .catch(er => {
            const newResponse = { status: er.response.status, message: "bad request" }
            return newResponse

        });
    console.log(response)
    return response;
}


const isAutenhenticated = () => {
    // return true;
    return localStorage.getItem('app-token') !== null
};

const saida = {
    login,
    create,
    isAutenhenticated,
    get,
    post,
    put,
    excluir,
    cadastra

}

export default saida;