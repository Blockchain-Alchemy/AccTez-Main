import * as Notification from '@mantine/notifications';

export const showNotification = (title: string, message: string) => {
  Notification.showNotification({
    title: title,
    message: message,
  })
}

export const alertMessage = (message: string) => {
  Notification.showNotification({
    title: 'Error',
    message: message,
    color: 'red'
  })
}

export const startNotification = (id: string, title: string, message: string) => {
  Notification.showNotification({
    id: id,
    loading: true,
    title: title,
    message: message,
    autoClose: false,
    disallowClose: true,
  })
}

export const hideNotification = (id: string) => {
  Notification.hideNotification(id);
}
