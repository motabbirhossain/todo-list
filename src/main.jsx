import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/main.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'milligram/dist/milligram.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
