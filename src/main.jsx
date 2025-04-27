import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/sass/main.scss'
import App     from './App.jsx'
import Header  from './components/Header.jsx'
import Mainn   from './components/Mainn.jsx'
import Widow   from './components/Widow.jsx'
import Collect from './components/Collect.jsx'
import Series  from './components/Series.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App     />
    <Header  />
    <Mainn   />
    <Widow   />
    <Collect />
    <Series  />
    <Footer  />
  </StrictMode>,
)
