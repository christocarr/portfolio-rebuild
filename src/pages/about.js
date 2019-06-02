import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = () => {
  return (
    <Layout>
      <h2>About Page</h2>
      <p>Please <Link to="contact">contact me</Link></p>
    </Layout>

  )
}

export default About