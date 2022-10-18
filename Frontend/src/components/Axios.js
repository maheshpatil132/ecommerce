import axios from 'axios'

export const Axios = axios.create({
    withCredentials:true,
    // baseURL: 'https://maqure.43.205.71.30.nip.io',
    baseURL: 'http://localhost:5000',
    headers: {
      "Content-Type": "application/json"
    },
  });


  // Axios.interceptors.response.use(
  //   response => (response), 
  //   error => (Promise.reject(error.response.data.err))
  // )


  axios.defaults.withCredentials = true
  