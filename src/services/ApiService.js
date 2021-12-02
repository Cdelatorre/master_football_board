import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true
})

http.interceptors.response.use(
  response => {
    console.log(response)
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export const getGames = () => http.get("/summary")

export const saveGame = (body) => http.post("/create", body)

export const deleteGame = (id) => http.post(`/delete/${id}`)