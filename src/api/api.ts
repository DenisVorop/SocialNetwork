import { ProfileType } from './../types/Types';
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
    async getUsers(currentPage: number, pageSize: number) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;;
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
}

export const profileAPI = {
    getUser(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, { status: status })
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData)
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile)
    },
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeCaptchaEnum {
    CaptchaIsRequired = 10,
}

type GetAuthType = {
    data: {
        id: number,
        email: string,
        login: string,
    },
    resultCode: ResultCodesEnum,
    messages: Array<string>,
}

type LoginType = {
    data: {
        userId: number,
    },
    resultCode: ResultCodesEnum | ResultCodeCaptchaEnum,
    messages: Array<string>,
}

export const authAPI = {
    getAuth() {
        return instance.get<GetAuthType>(`auth/me`)
    },
    login(email: string, password: string, captcha: null | string = null) {
        return instance.post<LoginType>(`auth/login`, { email, password, captcha })
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}

type GetCaptchaUrlType = {
    url: string,
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<GetCaptchaUrlType>(`security/get-captcha-url`)
    },
}
