import axios from "axios"

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    withCredentials: true,
    headers: {
        'API-KEY': 'c4deeac1-451b-4ef8-8dc8-a4ffeee3c9cc'
    }
})

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    }
}

export const authApi = {
    getMe() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    }
}

export const followApi = {
    follow(userId: number) {
        return instance.post(`/follow/${userId}`, {}, {})
    },
    unfollow(userId: number) {
        return instance.delete(`/follow/${userId}`)
    }
}

