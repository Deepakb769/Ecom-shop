import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SSRProvider from 'react-bootstrap/SSRProvider'

createRoot(document.getElementById('root')).render(
  <SSRProvider>
    <App />
  </SSRProvider>,
)
