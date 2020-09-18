import Vue from 'vue'
import axios from 'axios'

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:9000'
//   })

// Vue.prototype.$axios = axiosInstance
axios.defaults.baseURL = 'http://localhost:9000'
Vue.prototype.$axios = axios