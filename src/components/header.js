import React from 'react'
import { Link } from 'gatsby'
import  HeadRoom from 'react-headroom'
import Animate from 'animate.css-react'
import headerStyles from './header.module.scss'

const Header = () => {

  return (
    
    <header className={headerStyles.header}>
      <div className={headerStyles.titleContainer}>
        <h1>
          <Link to="/" className={headerStyles.title}>Christopher Carr</Link>
        </h1>
        <Animate>
          <p>Web Developer</p>
        </Animate>
      </div>
      <HeadRoom>
      <nav className={headerStyles.navList}>
        <li>
          <Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
            Blog
          </Link>
        </li>
      </nav>
      </HeadRoom>
    </header>
    
  )
}

export default Header 