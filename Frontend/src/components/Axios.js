import axios from 'axios'

export const Axios = axios.create({
  withCredentials: true,
  // baseURL: 'http://localhost:5000/',
  baseURL: 'https://ecommerce-bice-ten.vercel.app/',
  headers: {
    "Content-Type": "application/json"
  },
});


// Axios.interceptors.response.use(
//   response => (response), 
//   error => (Promise.reject(error.response.data.err))
// )


axios.defaults.withCredentials = true
