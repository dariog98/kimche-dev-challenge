import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApolloProvider } from'@apollo/client'
import RickAndMortyClient from './constats/RickAndMortyClient.jsx'
import './bootstrap.css'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ApolloProvider client={RickAndMortyClient}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>
)
