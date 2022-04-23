import { ApolloClient, ApolloError, InMemoryCache } from '@apollo/client/core/index.js';
import { createHttpLink } from '@apollo/client/link/http/index.js'
import { setContext } from '@apollo/client/link/context/index.js';
import { showSnackbar } from '../services/snackbar-service';
import { user } from "../services/auth-service"
import { get } from 'svelte/store';

const httpLink = createHttpLink({
    uri: import.meta.env.VITE_API_URL
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    let authUser = get(user)    
    let sessionToken = authUser ? authUser.sessionToken : ""
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            "X-Parse-Application-Id": import.meta.env.VITE_APP_ID,
            "X-Parse-Client-Key": import.meta.env.VITE_CLIENT_KEY,
            "X-Parse-Session-Token": sessionToken,
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: "network-only",
            errorPolicy: "all"

        },
        query: {
            fetchPolicy: "network-only",
            errorPolicy: "all"
        }
    },
    cache: new InMemoryCache()
});

export default client

export type ApiResult<T> = {
    error?: any
    result?: T
}

export async function apiCall<T>(operation: any): Promise<ApiResult<T>> {

    if (operation.then) {
        return new Promise((resolve) => {
            //check if operation is mutation
            operation.then(v => resolve({ result: v.data })).catch(v => {
                showSnackbar(v.message)
                resolve({ error: v.message })
            })
        })
    }
    else {
        let result = await operation
        let outPromise = new Promise((resolve, reject) => {
            result.subscribe(v => {
                if (!v.loading) {
                    if (v.errors)
                        resolve({ error: v.errors[0].message })
                    else{
                        resolve({
                            result: v.data
                        })
                    }
                }
            })
        })
        return outPromise
    }
}
