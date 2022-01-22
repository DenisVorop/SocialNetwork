import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '3f937305-6923-4984-a462-bd8b9b5a9758',
        // 00071860-fe5e-4145-bbba-c986916b8d9a
    },
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
}
export const profileAPI = {
    setUser(userId) {
        return instance.get(`profile/${userId}`)
    },
}
export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    },
}
