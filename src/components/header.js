import React from 'react'
import { Link } from 'gatsby'
import  HeadRoom from 'react-headroom'
import Fade from 'react-reveal/Fade'
import headerStyles from './header.module.scss'

const Header = () => {

  const isActive = ({ isCurrent }) => {
    return isCurrent ? { className: "active" } : { className: "inactive" }
  }

  return (
    
    <header className={headerStyles.header}>
      <div className={headerStyles.titleContainer}>
        <h1>
          <Link to="/" className={headerStyles.title}>Christopher Carr</Link>
        </h1>
        <Fade right>
          <p>Web Developer</p>
        </Fade>
      </div>
      <HeadRoom>
      <nav className={headerStyles.navList}>
        <li>
          <Link to="/about" getProps={isActive}>
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