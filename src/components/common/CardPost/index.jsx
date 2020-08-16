import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { Wrapper, Grid, Post, ArticleContent, ArticleTitle, Paragraph } from './styles'

export const CardPost = () => {
	return (
		<StaticQuery
			query = {graphql`
				query RecentlyPublish{
					allMarkdownRemark (
						sort: { order: DESC, fields: [frontmatter___date] }
						limit:3
					){
						edges {
							node {
								id
								frontmatter {
									thumbnail
									title
									date
									tags
									intro
								}
								fields {
									slug
								}
							}
						}
					}
				}
			`}
			render = {data => (
				<Wrapper>
					<Grid>
						{data.allMarkdownRemark.edges.map(({ node }) => (
							<Post key={node.id} as={Link} to={node.fields.slug}>
									<img src = {node.frontmatter.thumbnail} alt="thumbnail"/>
									<ArticleContent>
										<ArticleTitle>{node.frontmatter.title}{" "}</ArticleTitle>
										<Paragraph>{node.frontmatter.intro}</Paragraph>
										<p>{node.frontmatter.date}</p>
									</ArticleContent>
							</Post>
						))}
					</Grid>
				</Wrapper>
			)}
		/>
	)
}