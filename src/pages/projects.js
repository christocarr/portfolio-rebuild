import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import projectStyles from './projects.module.scss'
import Layout from '../components/layout'
import Head from '../components/head'
import Img from 'gatsby-image'

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
      <ol className={projectStyles.projectPosts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li className={projectStyles.projectPost} key={edge.node.id} >
              <h3>{edge.node.frontmatter.title}</h3>
              <div className={projectStyles.imgContainer}>
               <Img fluid={edge.node.frontmatter.image.childImageSharp.fluid} alt={edge.alt} />
              </div>
              <Link className={projectStyles.projectPostLink} to={`/projects/${edge.node.fields.slug}`}>more...</Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Projects