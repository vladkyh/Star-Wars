import React from 'react';
import ReactDOM from 'react-dom/client';
import '@style/index.css';
import App from '@containers/App/App';
import store from '@store/store';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from '@context/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


