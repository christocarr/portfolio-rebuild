import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

const Blog = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            excerpt
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
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              <h3>{edge.node.frontmatter.title}</h3>
              <p className={blogStyles.date}>{edge.node.frontmatter.date}</p>
              <p>{edge.node.excerpt}</p>
              <Link to={`/blog/${edge.node.fields.slug}`}>read more</Link>
            </li>
          )
        })}
      </ol>
      
    </Layout>
  )
}

export default Blog