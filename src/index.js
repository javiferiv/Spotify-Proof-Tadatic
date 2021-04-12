import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import './styles/_main.scss';
import { SpotifyApiContext, SpotifyApiAxiosContext } from 'react-spotify-api';

ReactDOM.render(
  <React.StrictMode>
    <SpotifyApiAxiosContext.Provider value={axios}>
    <SpotifyApiContext.Provider value={token}>
    <CoreLayout>
      <Routes />
      </CoreLayout>
    </SpotifyApiContext.Provider>
    </SpotifyApiAxiosContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
