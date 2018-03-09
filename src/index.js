import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Routes from './routes';
import { HttpLink } from 'apollo-link-http';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();


const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://http://localhost:3030/graphql' }),
  cache: new InMemoryCache()
});

const App = (
  <MuiThemeProvider>
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
  </MuiThemeProvider>
);

ReactDOM.render(App, document.getElementById('root'));

