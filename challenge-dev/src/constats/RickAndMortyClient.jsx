import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const RickAndMortyClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: import.meta.env.VITE_API_SERVER
    })
})

export default RickAndMortyClient