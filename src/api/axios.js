import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "aad18f3d5e330266cd6184277ca3a202",
        language: "ko-KR",
    }
})

export default instance;