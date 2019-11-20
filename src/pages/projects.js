import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import ProjectStyles from './project.module.scss'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <Layout>
    <Head title="Projects" />
    <h2>Projects</h2>
    <h3>SIBI Activity Search</h3>
    <h4>The Problem</h4>
    <p>CVS Brent had a spreadsheet with over 1600 records they were using in their Social Isolation in Brent Initiative (SIBI). 
      The initiative allows health care professionals help people that are isolated due to health find social activities they might be interested in.
      Searching for a particular activity on a spreadsheet that contains 1600 entries is a tiresome process.</p>
    <h4>The Solution</h4>
    <p>A responsive React web app that pulls in the spreadsheet data and allows the user to search for activities within an area of the patient's postcode.</p>
    <div className={ProjectStyles.imgContainer}>
      <Img fluid={data.file.childImageSharp.fluid} alt="sibi activity search" />
      <p>Visit the project <a href="https://activity-search.netlify.com/">here</a></p>
    </div>
    <p>Thats all for now but I have more projects over <a href="https://iamchriscarr.com/projects.html">here</a> on my old website.</p>
  </Layout>
)

export const query  = graphql `
  query {
    file(relativePath: { eq:"images/sibi-search.png" }) {
      childImageSharp {
        fluid(maxWidth: 200){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
