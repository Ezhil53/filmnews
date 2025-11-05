import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewsContextApi from './contextapi/NewsContextApi.jsx'

createRoot(document.getElementById('root')).render(
  <NewsContextApi>
       <App />
  </NewsContextApi>
)
