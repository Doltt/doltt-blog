import React from 'react'
import { CardPost, Container } from 'components/common'
import { Wrapper } from './styles'

export const PostsList = ({ data }) => {
	return (
		<Wrapper as={Container}>
			<h2>全部文章</h2>
			<CardPost />
		</Wrapper>
    )
}