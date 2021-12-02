import axios from 'axios'

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true
})

http.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)

export const getGames = () => http.get("/summary")

export const saveGame = (body) => http.post("/create", body)

export const deleteGame = (id) => http.delete(`/delete/${id}`)