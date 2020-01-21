import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
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
            frontmatter {
              title
              projectnumber
              image {
                childImageSharp {
                  fluid (maxWidth: 1024) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
      <ol className="container">
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li key={edge.node.id} >
              <Link className={`project ${edge.node.frontmatter.projectnumber}`} to={`/projects/${edge.node.fields.slug}`}>
                <div className="text-content">
                  <p>{edge.node.frontmatter.title}</p>
                </div>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Projects