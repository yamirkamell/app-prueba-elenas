import React, { useEffect, useState } from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
import Routes from './commons/routes';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContainer = () => {
  const [token, setToken] = useState(null);

  const getToken = async () => {
    const data = await AsyncStorage.getItem('user-token');
    setToken(data);
  };
  
  const httpLink = createHttpLink({
    uri: 'https://feat-custom-trace-fb-monitoring.dev.elenas.la/gql/'
  });
  
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: `Token ${token}`,
      }
    }
  });
  
  const options = (token !== null) ? {
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  } : {
    uri: 'https://feat-custom-trace-fb-monitoring.dev.elenas.la/gql/',
    cache: new InMemoryCache()
  }
  const client = new ApolloClient(options);

  useEffect(() => {
    getToken();
  },[]);

  return (
    <ApolloProvider client={client}>
      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex: 1}}>
          <Routes />
      </KeyboardAvoidingView>
    </ApolloProvider>
    );
}

    export default AppContainer;