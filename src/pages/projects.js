import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import projectStyles from './project.module.scss'
import Layout from '../components/layout'
import Head from '../components/head'

const Projects = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: {posttype: {eq: "project"}}
        }
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              title
            }
            id
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
      <Head title="Projects" />
      <h2>Projects</h2>
      <ol >
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li key={edge.node.id} >
              <h3>{edge.node.frontmatter.title}</h3>
              <p>{edge.node.excerpt}</p>
              <Link to={`/projects/${edge.node.fields.slug}`}>read more</Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Projects