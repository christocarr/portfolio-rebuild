import React from 'react'
import Form from '../components/form'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

import Layout from '../components/layout'
import Head from '../components/head'

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact "/>
      <h2>Get in touch</h2>
      <Form />
      <div className="icon-container">
      <a href="https://github.com/christocarr"><FaGithubSquare className="icon" /></a>
        <a href="https://www.linkedin.com/in/chris-carr-93288820"> <FaLinkedin className="icon" /></a>
        <a href="https://twitter.com/ChrisofCarr"><FaTwitterSquare className="icon"/></a>
      </div>
    </Layout>
  )
}

export default Contact
