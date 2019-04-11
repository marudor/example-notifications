import React from 'react';
import NotificationsProvider from './NotificationsProvider';

type Context = {
  addNotification: typeof NotificationsProvider.prototype.addNotification;
  removeNotification: typeof NotificationsProvider.prototype.removeNotification;
};

// @ts-ignore
const defaultContext: Context = {};

export default React.createContext<Context>(defaultContext);
