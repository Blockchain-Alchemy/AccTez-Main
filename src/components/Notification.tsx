import * as Notification from '@mantine/notifications';

export const showNotification = (title, message) => {
  Notification.showNotification({
    title: title,
    message: message,
  })
}

export const alertMessage = (message) => {
  Notification.showNotification({
    title: 'Error',
    message: message,
    color: 'red'
  })
}

export const startNotification = (id, title, message) => {
  Notification.showNotification({
    id: id,
    loading: true,
    title: title,
    message: message,
    autoClose: false,
    disallowClose: true,
  })
}

export const hideNotification = (id) => {
  Notification.hideNotification(id);
}
