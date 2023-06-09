import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './theme';
import '@react-native-firebase/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainStack from './stacks/MainStack';
import { AuthProvider } from './hooks/useAuth';

const queryClient = new QueryClient();

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <PaperProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <MainStack />
          </QueryClientProvider>
        </PaperProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
