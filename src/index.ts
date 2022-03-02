import ReactDOM from 'react-dom';
import './index.css';
import ApolloProvider from './Provider';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(ApolloProvider, document.getElementById('root'));

serviceWorkerRegistration.register();
