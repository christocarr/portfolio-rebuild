import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

import Layout from '../components/layout'
import Head from '../components/head'

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact "/>
      <h2>Contact Page</h2>
      <p>What is a website without a contact form?</p>
      <p>Reach out to me on twitter <a href="https://twitter.com/ChrisofCarr">@ChrisofCarr</a></p>
      <p>Connect with me on <a href="https://www.linkedin.com/in/chris-carr-93288820">LinkedIn</a></p>
      <p>My repos on <a href="https://github.com/christocarr">GitHub</a></p>
      <div className="iconContainer">
        <FaGithubSquare className="icon" />
        <FaLinkedin className="icon" />
        <FaTwitterSquare className="icon"/>
      </div>
    </Layout>
  )
}

export default Contact
