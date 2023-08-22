/* eslint-disable react/react-in-jsx-scope */
import Navigation from './src/routes';
import {Provider} from 'react-redux';
import redux from './src/redux';
import {NativeBaseProvider} from 'native-base';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import './src/i18n/i18n';

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={redux}>
      <NativeBaseProvider>
        <QueryClientProvider client={queryClient}>
          <Navigation />
          <Toast />
        </QueryClientProvider>
      </NativeBaseProvider>
    </Provider>
  );
}
