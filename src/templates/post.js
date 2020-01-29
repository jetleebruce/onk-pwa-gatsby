import React, { Component } from "react"
import Layout from "../components/layout"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <div>
          <img src={post.featured_media.source_url} />
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div style={{color: `white`}} dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
        source_url
      }
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
