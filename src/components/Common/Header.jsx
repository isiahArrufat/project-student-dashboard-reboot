import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
  return (
    <Link to={'/'}>
    <header>
    <div>Student Dashboard</div>
    </header>
    </Link>
  )
}

export default Header