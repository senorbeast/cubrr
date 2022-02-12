import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';

const httpLink = createHttpLink({
    uri: 'http://localhost:5000',
});

const client: any = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

// Wrapping the whole ReactApp - the ApolloClient  with ApolloProvider linked with the hosted Backend
export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
