import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
});

// const authLink = setContext((_, { headers }) => {
//   const token = sessionStorage.getItem('token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     }
//   };
// });

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache()
// });

const client = new ApolloClient({ 
    uri: 'http://localhost:4000/', 
    cache: new InMemoryCache(), 
  });

export default client;      
