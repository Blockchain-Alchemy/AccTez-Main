import React from 'react'
import { Provider } from "react-redux";
import { NotificationsProvider } from '@mantine/notifications';
import store from "./store";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <NotificationsProvider>
        { children }
      </NotificationsProvider>
    </Provider>
  )
}

export default Providers
