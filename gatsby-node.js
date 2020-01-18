const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md');
    createNodeField ({
      node,
      name: 'slug',
      value: slug
    });
  }
  
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('./src/templates/posts.js');
  const projectTemplate = path.resolve('./src/templates/project-posts.js')

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              posttype
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  
  res.data.allMarkdownRemark.edges.forEach(edge => {
    if (edge.node.frontmatter.posttype === 'project') {
      createPage({
        path: `/projects/${edge.node.fields.slug}`,
        component: projectTemplate,
        context: {
          slug: edge.node.fields.slug
        }
      })
    } else {
      createPage({
        component: postTemplate,
        path: `/blog/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug
        }
      })
    }
  })
}

