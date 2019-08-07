import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h2>About<h2>
      <h3>The Short</h3>
      A web designer and developer working in London, UK. I specialize in frontend developent. 
      <h3>The Long</h3>
      <p>Born in a little city called Pretoria in South Africa I came to the big old city of London to find better opportunities
      and after a little while, wondering the unkown and hazy, I found myself in the world of web delopement. Since then I have
      not looked back.</p>
      <p>Right now I develop with React and the JAMStack, in the long term I plan to become a fullstack developer, but I'm open to
      learning other tech to keep myself open to job oppurtunities.</p>
      <p>Please <Link to="contact">contact me</Link></p>
    </Layout>

  )
}

export default About
