import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header>
      <h1>Christopher Carr</h1>
      <ul>
        <li><Link to="about">About</Link></li>
        <li><Link to="projects">Projects</Link></li>
        <li><Link to="contact">Contact</Link></li>
        <li><Link to="blog">Blog</Link></li>
      </ul>
    </header>
  )
}

export default Header 