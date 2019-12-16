import axios from "axios"

const service = axios.create(
    // {
    //     baseURL : "http://api.egu365.com"
    // }
) 

service.interceptors.request.use(config=>{
    return config
})
service.interceptors.response.use(res=>{
    return res.data
})
export default service
