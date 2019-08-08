import React from 'react'

import gatsbyLogo from '../images/Gatsby-Monogram.svg'
import netlifyLogo from '../images/netlify-logomark.svg'
import footerStyles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p className={footerStyles.logos}>
        Made with 
        <a href="https://www.gatsbyjs.org/"><img className={footerStyles.logo} src={gatsbyLogo} alt="gatsby logo"/></a> 
          and hosted by  
        <a href="https://www.netlify.com/"><img className={footerStyles.logo} src={netlifyLogo} alt="netlify logo" /></a>
      </p>
    </footer>
  )
}

export default Footer
