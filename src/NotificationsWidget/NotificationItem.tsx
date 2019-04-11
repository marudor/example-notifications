import React from 'react';
import { Notification } from './NotificationsProvider';
import './NotificationItem.css';

type Props = {
  notification: Notification;
};

const NotificationItem = ({ notification }: Props) => (
  <div className={`notification notification-${notification.type}`}>
    <span>{notification.message}</span>
  </div>
);

export default NotificationItem;
