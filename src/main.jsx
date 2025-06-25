import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Rick from './pages/Rick'
import Morty from './pages/Morty'
import Meeseeks from './pages/Meeseeks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Rick" element={<Rick />} />
          <Route path="Morty" element={<Morty />} />
          <Route path="Meeseeks" element={<Meeseeks />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)