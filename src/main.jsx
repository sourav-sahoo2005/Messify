import { createRoot } from 'react-dom/client'
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </BrowserRouter>
)
