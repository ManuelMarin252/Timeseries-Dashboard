import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline'

const rootElement = document.getElementById('root')
if (rootElement !== null) {
  createRoot(rootElement).render(
  <StrictMode>
    <CssBaseline/>
    <App/>
  </StrictMode>
  )
}
