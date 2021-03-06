import axios from "axios"

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    withCredentials: true,
    headers: {
        'API-KEY': 'a51c385e-38b4-45b2-933a-739b6104467f'
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
        return instance.get(`profile/` + userId);
    }
}

export const profileApi = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status});
    }
}


export const authApi = {
    getMe() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`);
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
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

