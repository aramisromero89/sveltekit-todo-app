import { ApolloClient, ApolloError, InMemoryCache } from '@apollo/client';
import { createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: import.meta.env.VITE_API_URL
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    let sessionToken = ""
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
