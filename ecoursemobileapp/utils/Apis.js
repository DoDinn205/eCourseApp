const BASE_URL ='https://teaching2504.pythonanywhere.com/';

export const endpoints={
    'categories':'/categories/',
    'courses':'/courses/',
    'lessons':(courseId) =>`/courses/${courseId}/lessons/`,
    'register':'/users/'
};

export default axios.create({
    baseURL: BASE_URL
});