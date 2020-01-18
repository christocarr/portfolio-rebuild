import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

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
        image {
          childImageSharp {
            fluid (maxWidth: 1024) {
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
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>
      </div>
      <div>
        <Img fluid={postData.image.childImageSharp.fluid} alt={postData.alt} />
      </div>
    </Layout>
  )
}

export default Post