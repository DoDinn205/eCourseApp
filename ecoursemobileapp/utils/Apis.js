import axios from 'axios';
const BASE_URL ='https://teaching2504.pythonanywhere.com/';

export const endpoints={
    'categories':'/categories/',
    'courses':'/courses/',
    'lessons':(courseId) =>`/courses/${courseId}/lessons/`,
    'register':'/users/',
    'login':'/o/token',
    'current-user':'/users/current-user/',

};

export const authApis=(token)=>{
    return axios.create({
        baseURL: BASE_URL,
        headers:{
            'Authorization': `Bearer ${token}`
        }
    })
}

export default axios.create({
    baseURL: BASE_URL
});a