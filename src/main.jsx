import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import Navigation from './Componenets/Navigation.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    {/* <Navigation/> */}
  </BrowserRouter>
)
