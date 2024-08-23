import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import About from './About'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <About />
  </React.StrictMode>,
)
