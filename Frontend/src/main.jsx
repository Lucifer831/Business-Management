import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Authcontext from './context/Authcontext.jsx'
import App1 from './Pages/App1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authcontext>
      <BrowserRouter>
    <App1/>
    <ToastContainer />
    </BrowserRouter>
    </Authcontext>
   
  </StrictMode>,
)
