import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { getAccessToken, setAccessToken } from './utils/accessToken';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import jwtDecode from 'jwt-decode';
// import { config } from './config';

const tokenRefreshLink = new TokenRefreshLink({
  accessTokenField: 'accessToken', // field name from the response
  isTokenValidOrUndefined: () => {
    const token = getAccessToken();

    if (!token) {
      return true;
    }

    try {
      const { exp }: any = jwtDecode(token);

      // if (!exp) return false;
      if (Date.now() >= exp * 1000) {
        return false;
      } else {
        return true;
      }
    } catch (e) {
      console.log('Error here...');
      return false;
    }
  },

  fetchAccessToken: () => {
    return fetch(`${process.env.SERVER_BASE_URL}/refresh_token`, {
      method: 'POST',
      credentials: 'include',
    });
  },
  handleFetch: (accessToken) => {
    setAccessToken(accessToken);
  },
  handleError: (err) => {
    console.warn('Refresh token geçersiz, yeniden giriş yapın!');
    console.error(err);
  },
});

const httpLink = createHttpLink({
  uri: `${process.env.SERVER_BASE_URL}/graphql`,
  fetchOptions: {
    credentials: 'include',
  },
});

const authLink = setContext(async (_, { headers }) => {
  const token = getAccessToken();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  //  @ts-ignore
  link: from([tokenRefreshLink, authLink, httpLink]),
  cache: new InMemoryCache({}),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
