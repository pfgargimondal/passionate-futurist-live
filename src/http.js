import axios from 'axios';
export default axios.create({
    baseURL:"https://asliadmin.passionatefuturist.com/public/api",
    headers:{
        "Content-Type":"application/json"
    }
})