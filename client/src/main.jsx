import React from 'react'
import ReactDOM from 'react-dom/client'
import { TransactionsProvider } from './context/TransactionsContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionsProvider>,
)
