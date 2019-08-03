import axios from "axios";

const api = axios.create({
    baseURL : "https;//api.themobivdb.org/3/",
    params: {
        api_key: "d5fe62590abe1519e78a027cf17166ac",
        language: "en-US";
    }
});

export default api;