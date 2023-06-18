import axios from "axios";

// настройка инстанса для дальнейшего вызова
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "420ea3b0-cd62-4008-ae68-ebe6654bc106",
    }
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow(userId) {
        return instance.post(`/follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`/follow/${userId}`)
    },

    getProfile(userId){
        return profileAPI.getProfile(userId) 
    }
}

export const profileAPI = {
    getProfile(userId){
        console.warn('используется устаревший метод!!')
        return instance.get(`/profile/${userId}`);  
    },

    getStatus(userId){
        return instance.get(`/profile/status/${userId}`)
    },

    updateStatus(status){
        return instance.put(`/profile/status/`, {status: status})
    }
}

// получение профиля
export const authAPI = {
    me(){
        return instance.get(`/auth/me`)
    },

    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logout(){
        return instance.delete(`auth/login`)
    }
}
