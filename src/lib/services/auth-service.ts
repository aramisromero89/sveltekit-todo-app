import { signIn, signUp } from "../api/generated-client"
import { derived, writable } from "svelte/store";
import storage from "../utils/storage";
import { apiCall } from "../api/apollo-client";

export type User = {
    username: string
    avatar?: string
    sessionToken: string
}

const _user = storage<User>("user", null)

export const user = derived(_user, (value) => {
    return value ? { ...value } : null
})

export function reqSignUp(username: string, password: string, avatar?: string) {
    return apiCall(signUp({
        variables: {
            username: username,
            password: password,
            avatar: avatar
        }
    }))
}

