import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

const Blog = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <ol>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li>
              <h3><Link to={`/blog/${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link></h3>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
      
    </Layout>
  )
}

export default Blog