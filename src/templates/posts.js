import React from 'react'
import { graphql } from 'gatsby'
import Disqus from 'gatsby-plugin-disqus'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        date(formatString: "dddd MMMM Do, YYYY")
      }
      html
    }
  }
`

const Post = (props) => {
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <h2>{props.data.markdownRemark.frontmatter.title}</h2>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>
      </div>
      <Disqus
        identifier={props.data.markdownRemark.id}
        title={props.data.markdownRemark.frontmatter.title}
      />
    </Layout>
  )
}

export default Post
