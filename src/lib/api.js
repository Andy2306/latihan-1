import axios from 'axios'

const apiKey = 'c5d9339cb9b2b095f5ea77ff397e1141'
const baseUrl = 'https://api.themoviedb.org/3'
export const imageUrl = 'https://image.tmdb.org/t/p/original'

const apiAxios = axios.create({
    baseURL: baseUrl,
    params: {
        api_key: apiKey,
    }
})

export default apiAxios