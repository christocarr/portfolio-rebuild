import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h2>About</h2>
      <h3>The Short</h3>
      <p>I'm web designer and developer working in London, UK. I specialize in frontend development.</p>
      <h3>The Long</h3>
      <p>Born in a little city called Pretoria in South Africa I came to the big old city of London to find better opportunities
      and after a little while, wondering the unknown and hazy, I found myself in the world of web development. Since then I have
      not looked back.</p>
      <p>Right now I develop with React and the JAMStack(a fullstack of sorts) and in the long term, if not already, I plan to become a fullstack developer. I'm open minded to
      learning new tech to keep myself open to job opportunities.</p>
      <p>Please <Link to="contact">contact me</Link></p>
    </Layout>

  )
}

export default About
