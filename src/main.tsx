import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/styles/style.sass"
import { AppRouter } from './routes/Router'
import App from './views/site-build/App';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
    {/* <App /> */}
  </React.StrictMode>,
);