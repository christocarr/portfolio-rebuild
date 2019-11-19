import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const Projects = () => {
  return (
    <Layout>
      <Head title="Projects" />
      <h2>Projects</h2>
      <p>Future projects will appear on this page.</p>
      <p>Past projects <a href="https://iamchriscarr.com/projects.html">here</a> on my old website.</p>
      <h3>SIBI Activity Search</h3>
      <h4>The Problem</h4>
      <p>CVS Brent had a spreadsheet with over 1600 records they were using in their Social Isolation in Brent Initiative (SIBI). 
        The initiative allows health care professionals help people that are isolated due to health find social activities they might be interested in.
        Searching for a particular activity on a spreadsheet that contains 1600 entries is a tiresome process.</p>
      <h4>The Solution</h4>
      <p>A React app that pulls in the data from the spreadsheet and allows the user to search for activities within an area of the patient's postcode.</p>
    </Layout>
  )
}

export default Projects