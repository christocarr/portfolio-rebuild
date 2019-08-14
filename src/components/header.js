import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>Christopher Carr</Link>
      </h1>
      <p>{data.site.siteMetadata.title}</p>
      <nav className={headerStyles.navList}>
        <li>
          <Link to="about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="./blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
            Blog
          </Link>
        </li>
      </nav>
    </header>
  )
}

export default Header 