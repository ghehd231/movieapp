// import axios from "axios";

// const api = axios.create({
//     baseURL : "https://api.themoviedb.org/3/",
//     params: {
//         api_key: "d5fe62590abe1519e78a027cf17166ac",
//         language: "en-US"
//     }
// });

// // export const moviesApi = {
// //     nowPlaying: () => api.get("movie/now_playing"),
// //     upcoming: () => api.get("movie/upcoming"),
// //     popular: () => api.get("movie/popular"),
// //     movieDetail: id =>
// //         api.get(`movie/${id}`, {
// //             params: {
// //                 append_to_response: "videos"
// //             }
// //         }),
// //     search: term => 
// //         api.get(`search/movie`,{
// //             params: {
// //                 query: encodeURIComponent(term)
// //             }
// //         })
// // }

// export const moviesApi = {
//     nowPlaying: () => api.get("movie/now_playing"),
//     upcoming: () => api.get("movie/upcoming"),
//     popular: () => api.get("movie/popular"),
//     movieDetail: id =>
//       api.get(`movie/${id}`, {
//         params: {
//           append_to_response: "videos"
//         }
//       }),
//     search: term =>
//       api.get("search/movie", {
//         params: {
//           query: encodeURIComponent(term)
//         }
//       })
//   };

// // export const tvApi = {
// //     topRated: () => api.get("tv/top_rated"),
// //     popular: () => api.get("tv/popular"),
// //     airing_today: () => api.get("tv/airing_today"),
// //     showDetail: id =>
// //         api.get(`tv/${id}`,{
// //             params: {
// //                 append_to_response: "videos"
// //             }
// //         }),
// //     search: term => 
// //         api.get(`search/tv`,{
// //             params: {
// //                 query: encodeURIComponent(term)
// //             }
// //         })
// // }

// export const tvApi = {
//     topRated: () => api.get("tv/top_rated"),
//     popular: () => api.get("tv/popular"),
//     airingToday: () => api.get("tv/airing_today"),
//     showDetail: id =>
//       api.get(`tv/${id}`, {
//         params: {
//           append_to_response: "videos"
//         }
//       }),
//     search: term =>
//       api.get("search/tv", {
//         params: {
//           query: encodeURIComponent(term)
//         }
//       })
//   };

// export default api;


import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "ae61da0a1b03db56e103056851b7e551",
        language: "en-US"
    }
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id =>
        api.get(`movie/${id}?api_key=ae61da0a1b03db56e103056851b7e551`, {
            params: {
                append_to_response: "videos"
            }
        }),
    search: term =>
        api.get("search/movie", {
            params: {
                query: encodeURIComponent(term)
            }
        })
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: id =>
        api.get(`tv/${id}?api_key=ae61da0a1b03db56e103056851b7e551`, {
            params: {
                append_to_response: "videos"
            }
        }),
    search: term =>
        api.get("search/tv", {
            params: {
                query: encodeURIComponent(term)
            }
        })
}

export default api;