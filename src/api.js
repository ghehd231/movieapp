import axios from "axios";

const api = axios.create({
    baseURL : "https;//api.themobivdb.org/3/",
    params: {
        api_key: "d5fe62590abe1519e78a027cf17166ac",
        language: "en-US";
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular")
}

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airing_today: () => api.get("tv/airing_today")
}

export default api;