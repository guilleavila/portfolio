import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MouseProviderWrapper } from './context/mouse.context'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MouseProviderWrapper>
      <App />
    </MouseProviderWrapper>
  </React.StrictMode>,
)
