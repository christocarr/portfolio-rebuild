import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <Helmet>
      <title>{ `${title} | ${data.site.siteMetadata.author}` }</title>
      <link rel="canonical" href="https://…"/>
    </Helmet>
  )
}

export default Head
