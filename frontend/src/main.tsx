import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./App.css"
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import store from './Redux/Store';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
)
