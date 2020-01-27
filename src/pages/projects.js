import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import BackgroundImage from 'gatsby-background-image'

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
              image {
                childImageSharp {
                  fluid (quality: 100, maxWidth: 720) {
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
              <BackgroundImage
                fluid={edge.node.frontmatter.image.childImageSharp.fluid}
              >
                <Link className="project" to={`/projects/${edge.node.fields.slug}`}>
                  <div className="text-content">
                    <p>{edge.node.frontmatter.title}</p>
                  </div>
                </Link>
              </BackgroundImage>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Projects