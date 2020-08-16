import React from 'react'

import { Container, SocialIcon } from 'components/common'
import { Wrapper } from './styles'


export const Navbar = () => {
	return (
		<Wrapper as={Container}>
			<a href="http://beian.bizcn.com/login.jsp" target="_blank" rel='noreferrer'>©粤ICP备18003637号</a>
			<SocialIcon />
		</Wrapper>
    )
}