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

  const contentfulData = useStaticQuery(graphql`
    query {
      allContentfulContentfulPostExample (
        sort: {
          fields: publishedDate
          order: DESC
        }
      ) {
        edges{
          node {
            title
            slug
            publishedDate (
              formatString: "DD MMMM YYYY"
            )
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
      <ol className={blogStyles.posts}>
        {contentfulData.allContentfulContentfulPostExample.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              <h3>{edge.node.title}</h3>
              <p className={blogStyles.data}>
                {edge.node.publishedDate}
              </p>
            </li>
          )
        })}
      </ol>
      
    </Layout>
  )
}

export default Blog