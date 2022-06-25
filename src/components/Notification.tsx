import * as Notification from '@mantine/notifications';

export const info = (title: string, message: string) => {
  Notification.showNotification({
    title: title,
    message: message
  });
};

export const error = (title: string, message: string) => {
  Notification.showNotification({
    title: title,
    message: message,
    color: 'red'
  });
};

export const start = (id: string, title: string, message: string) => {
  Notification.showNotification({
    id: id,
    loading: true,
    title: title,
    message: message,
    autoClose: false,
    disallowClose: true
  });
};

export const update = (id: string, message: string) => {
  Notification.updateNotification({
    id: id,
    message: message,
    loading: true,
    autoClose: false
  });
};

export const success = (id: string, message: string) => {
  Notification.updateNotification({
    id: id,
    color: 'teal',
    title: 'Success',
    message: message,
    autoClose: 2000
  });
};

export const fail = (id: string, message: string) => {
  Notification.updateNotification({
    id: id,
    color: 'red',
    title: 'Error',
    message: message,
    autoClose: 2000
  });
};

export const close = (id: string) => {
  Notification.hideNotification(id);
};
