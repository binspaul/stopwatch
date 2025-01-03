import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Circle from './Circle.jsx'
// import Clock from './Clock.jsx'
import StopWatch from './StopWatch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Clock /> */}
    <StopWatch/>
  </StrictMode>,
)
