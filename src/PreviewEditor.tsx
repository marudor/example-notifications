import React from 'react';
import NotificationsContext from './NotificationsWidget/NotificationsContext';
import {
  NotificationsType,
  NotificationsLocation,
} from './NotificationsWidget/NotificationsProvider';

export default () => {
  const [message, setMessage] = React.useState('');
  const [type, setType] = React.useState<NotificationsType>('alert');
  const [location, setLocation] = React.useState<NotificationsLocation>('tl');

  return (
    <NotificationsContext.Consumer>
      {({ addNotification }) => (
        <>
          <label htmlFor="message">Message</label>
          <textarea
            value={message}
            onChange={e => setMessage(e.currentTarget.value)}
            id="message"
          />
          <label htmlFor="type">Type</label>
          <select
            value={type}
            // @ts-ignore - we know this can't be invalid
            onChange={e => setType(e.currentTarget.value)}
            id="type"
          >
            <option value="alert">alert</option>
            <option value="info">info</option>
            <option value="warning">warning</option>
          </select>
          <label htmlFor="location">Location</label>
          <select
            value={location}
            // @ts-ignore - we know this can't be invalid
            onChange={e => setLocation(e.currentTarget.value)}
            id="location"
          >
            <option value="tl">Top Left</option>
            <option value="tr">Top Right</option>
            <option value="bl">Bottom Left</option>
            <option value="br">Bottom Right</option>
          </select>
          <button onClick={() => addNotification(message, type, location)}>
            Send
          </button>
        </>
      )}
    </NotificationsContext.Consumer>
  );
};
