import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Disqus from 'gatsby-plugin-disqus'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        alt
        credit
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Post = (props) => {
  const postData = props.data.markdownRemark.frontmatter
  return (
    <Layout>
      <Head title={postData.title} />
      <h2>{postData.title}</h2>
      <p>{postData.date}</p>
      <Img fluid={postData.image.childImageSharp.fluid} alt={postData.alt} />
      <p>{postData.credit}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>
      </div>
      <Disqus
        identifier={props.data.markdownRemark.id}
        title={postData.title}
      />
    </Layout>
  )
}

export default Post
