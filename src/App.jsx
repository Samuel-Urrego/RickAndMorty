import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Rick">Rick</Link>
          </li>
          <li>
            <Link to="/Morty">Morty</Link>
          </li>
          <li>
            <Link to="/Meeseeks">Meeseeks</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default App