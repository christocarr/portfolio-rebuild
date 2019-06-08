import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h2>About Page</h2>
      <p>Please <Link to="contact">contact me</Link></p>
    </Layout>

  )
}

export default About