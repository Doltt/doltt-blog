import React from "react"
import { graphql } from "gatsby"
import { Layout, SEO, SmallContainer, Banner, Post } from "components/common"

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumbnail
        date
        tags
        intro
      }
      excerpt
    }
  }
`

export default ({ data:{post} }) => {
  return (
    <Layout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Banner
          ImgPath = {post.frontmatter.thumbnail}
          Title = {post.frontmatter.title}
          PublishDate = {post.frontmatter.date}
          PostIntro = {post.frontmatter.intro}
        />
      <SmallContainer>
          <Post {...post} />
      </SmallContainer>
    </Layout>
  )
}






