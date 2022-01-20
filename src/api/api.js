import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '00071860-fe5e-4145-bbba-c986916b8d9a',
    },
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
                return response.data;
            });
    },
    // follow() {
    //     return instance.post(`follow/${id}`, {}, {})
    //         .then(response => {
    //             return response.data;
    //         });
    // },
    // unfollow() {
    //     return instance.post(`follow/${id}`, {}, {})
    //         .then(response => {
    //             return response.data;
    //         });
    // }
}
