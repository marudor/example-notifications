import React, { Component } from 'react';
import './App.css';
import PreviewEditor from './PreviewEditor';
import NotificationsProvider from './NotificationsWidget/NotificationsProvider';

class App extends Component {
  render() {
    return (
      <div>
        <NotificationsProvider>
          <PreviewEditor />
        </NotificationsProvider>
      </div>
    );
  }
}

export default App;
