import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/globalStyle'

import Home from './pages/home/home'
import About from './pages/about/about'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Home/>
    <About/>
  </React.StrictMode>,
)
