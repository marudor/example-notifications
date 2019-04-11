import React, { Component } from 'react';
import uuid from 'uuidv4';
import NotificationsContext from './NotificationsContext';
import NotificationItem from './NotificationItem';
import './NotificationsProvider.scss';

export type NotificationsType = 'info' | 'alert' | 'warning';
export type NotificationsLocation = 'tl' | 'tr' | 'br' | 'bl';

export type Notification = {
  id: string;
  message: string;
  type: NotificationsType;
  location: NotificationsLocation;
};

type State = {
  notifications: Notification[];
};

class NotificationsProvider extends Component<{}, State> {
  state: State = {
    notifications: [],
  };

  addNotification = (
    message: string,
    type: NotificationsType,
    location: NotificationsLocation
  ) => {
    const id = uuid();
    this.setState({
      notifications: [
        ...this.state.notifications,
        {
          id,
          type,
          location,
          message,
        },
      ],
    });
    setTimeout(() => this.removeNotification(id), 5000);
    return id;
  };

  removeNotification = (idToRemove: string) => {
    this.setState({
      notifications: this.state.notifications.filter(
        ({ id }) => id !== idToRemove
      ),
    });
  };

  getNotifications(location: NotificationsLocation) {
    const { notifications } = this.state;
    const relevantNotifications = notifications.filter(
      n => n.location === location
    );

    return (
      <div className={`NotificationsProvider-${location}`}>
        {relevantNotifications.map(n => (
          <NotificationItem key={n.id} notification={n} />
        ))}
      </div>
    );
  }

  render() {
    return (
      <NotificationsContext.Provider
        value={{
          addNotification: this.addNotification,
          removeNotification: this.removeNotification,
        }}
      >
        {this.props.children}
        {this.getNotifications('tl')}
        {this.getNotifications('tr')}
        {this.getNotifications('bl')}
        {this.getNotifications('br')}
      </NotificationsContext.Provider>
    );
  }
}

export default NotificationsProvider;
