import React from 'react'
import { Container, CardPost } from 'components/common'
import { Wrapper, Center, MainButton } from './styles'

export const Recently = () => {
	return (
				<Wrapper as={Container}>
					<h2> 近期更新 </h2>
					<CardPost />
					<Center>
						<MainButton href='/blog'>查看更多</MainButton>
					</Center>
				</Wrapper>
	)
}