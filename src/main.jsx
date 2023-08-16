import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)

// intentionally removed <react.strictMode> to prevent re-rendering twice on-mount 