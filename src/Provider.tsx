import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';
import { store } from './components/ReduxStore/store';
import { Provider as ReduxProvider } from 'react-redux';

const httpLink = createHttpLink({
    uri: 'http://localhost:5000',
});

const client: any = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

// Wrapping the whole ReactApp - the ApolloClient  with ApolloProvider linked with the hosted Backend
// And Redux Store ( State Management Solution)
export default (
    <ApolloProvider client={client}>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </ApolloProvider>
);
