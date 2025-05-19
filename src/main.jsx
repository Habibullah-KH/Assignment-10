import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './provider/AuthProvider'
import LayoutLoader from './component/LayoutLoader'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <LayoutLoader/>
    </AuthProvider>
  </StrictMode>
)
