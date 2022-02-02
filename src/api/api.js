import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        // 'API-KEY': '00071860-fe5e-4145-bbba-c986916b8d9a', // @icloud
        'API-KEY': 'bd97bc44-ee49-43cd-9b12-cf3106c7238d', // @mail
    },
});

export const usersAPI = {
    async getUsers(currentPage, pageSize) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;;
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
}
export const profileAPI = {
    getUser(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData)
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    },
}
export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    },
    login(email, password, captcha = null) {
        return instance.post(`auth/login`, { email, password, captcha })
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    },
}
