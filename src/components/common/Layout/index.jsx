import React from 'react'
import { Wrapper } from './styles'
import { Header, Footer } from 'components/theme'
import './layout.css'

export const Layout = ({children}) => {
	return (
		<div>
			<Header />
			<Wrapper>{children}</Wrapper>
			<Footer />
		</div>

	)
}