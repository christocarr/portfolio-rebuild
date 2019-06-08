import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'
import Head from '../components/head'

const Index = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h2>Welcome!</h2>
      <h3>I'm Chris, a web developer living in London</h3>
      <p>Need me to build your next website or app? <Link to="contact">Contact me.</Link></p>
    </Layout>

  )
}

export default Index