import React from 'react';
import ReactDOM from 'react-dom';
import NewApp from './NewApp'
import SettingProvider from './context/SettingProvider'

ReactDOM.render(
  <React.StrictMode>
    <SettingProvider>
      <NewApp />
    </SettingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
