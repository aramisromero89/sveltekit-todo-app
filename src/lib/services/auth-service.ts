import { signIn, SignInMutation, signOut, signUp } from "../api/generated-client"
import { derived, writable } from "svelte/store";
import storage from "../utils/storage";
import { apiCall } from "../api/apollo-client";

export type User = {
    id: string
    username: string
    avatar?: string
    sessionToken: string
}

const _user = storage<User>("user", null)

export const user = derived(_user, (value) => {
    return value ? { ...value } : null
})



export async function reqSignIn(username: string, password: string) {
    let res = await apiCall<SignInMutation>(signIn({
        variables: {
            username: username,
            password: password        }
    }))

    if(!res.error){       
        let data = res.result.logIn.viewer
        _user.set({
            sessionToken: data.sessionToken,
            id: data.user.id,
            username: data.user.username,
            avatar: data.user.avatar
        })
    }

    return res;
}

export function reqSignOut() {
    apiCall(signOut({}))
    _user.set(null)
}


export function reqSignUp(username: string, password: string, avatar?: string) {
    return apiCall(signUp({
        variables: {
            username: username,
            password: password,
            avatar: avatar
        }
    }))
}

