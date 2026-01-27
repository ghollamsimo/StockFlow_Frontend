import api from "../api/Api.ts";

export function login(email: string, password: string) {
    return api().post("/auth/login", {
        email,
        password,
    });
}