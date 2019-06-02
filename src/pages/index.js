import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'

const Index = () => {
  return (
    <Layout>
      <h2>Index Page</h2>
      <p>Hire me! <Link to="contact">Contact me.</Link></p>
    </Layout>

  )
}

export default Index