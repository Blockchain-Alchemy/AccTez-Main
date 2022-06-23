import React from 'react'
import { Provider } from "react-redux";
import { NotificationsProvider } from '@mantine/notifications';
import store from "./store";
import { TezosProvider } from "./components/TezosContext";

const options = {
  appName: 'demo',
  networkType: 'ithacanet',
  'rpc': 'https://ithacanet.smartpy.io',
};

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <TezosProvider options={options}>
        <NotificationsProvider>
          { children }
        </NotificationsProvider>
      </TezosProvider>
    </Provider>
  )
}

export default Providers
