
const BASE_URL = "https://c2-backend.up.railway.app/api/v1/";

const AuthAPI = {
    register: async ({ name, email, password, phone }) => {
        const response = await fetch(BASE_URL + "register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password,
                phone
            })
        })
        return await response.json();
    },
    login: async ({ email, password }) => {
        const response = await fetch(BASE_URL + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
            })
        })
        return await response.json();
    }
}

export default AuthAPI