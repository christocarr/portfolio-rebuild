import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  )
}

export default Footer
