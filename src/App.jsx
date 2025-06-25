import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className='home-link'>Home</Link>
          </li>
          <li>
            <Link to="/Rick" className='rick-link'>Rick</Link>
          </li>
          <li>
            <Link to="/Morty" className='morty-link'>Morty</Link>
          </li>
          <li>
            <Link to="/Meeseeks" className='meeseeks-link'>Meeseeks</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default App