import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'
const apiKey = import.meta.env.VITE_API_KEY

const getAll = () => {
    const request = axios.get(`${baseUrl}/all`)
    return request.then(response => response.data)
}
const getWeather = (lat, lon) => {
    const weaterAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    const request = axios.get(weaterAPI)
    return request.then(response => response.data)
}

export default { getAll, getWeather }