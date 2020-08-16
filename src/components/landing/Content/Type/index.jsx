import React from 'react'
import { Wrapper, Grow, Title } from './styles'

export default ({ icon, title }) => (
	<Wrapper>
		<Grow>
			<img src={icon} alt={title} />
		</Grow>
		<Title>{title}</Title>
	</Wrapper>
)