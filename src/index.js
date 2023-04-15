import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Main from './components/Main'
import Main2 from './components/Main2'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Main2 />
    <Footer />
  </React.StrictMode>
)
