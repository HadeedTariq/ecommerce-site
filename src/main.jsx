import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initialState } from './context/initialStae'
import { reducer } from './context/reducer'
import { ContextProvider } from './context/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider reducer={reducer} state={initialState}>
      <App />
    </ContextProvider>
  </React.StrictMode>,
)
