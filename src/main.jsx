import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './myntra.css'
import './myntra.jsx'
import Myntra from './myntra.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Myntra/>
    <App />
  </React.StrictMode>,
)
