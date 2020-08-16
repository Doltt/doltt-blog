import React from 'react'
import { Container } from 'components/common'
import {Wrapper, MainButton, Flex} from './styles'

export const Intro = ({Title, Intro, IntroSupplement, ButtonDisplay, ButtonText, ButtonLink }) => {
	return(
		<Wrapper as={Container}>
			<h1> {Title} </h1>
			<p> {Intro} </p>
			<p> {IntroSupplement} </p>
			<Flex ButtonDisplay={ButtonDisplay}>
				<MainButton href={ ButtonLink }>{ButtonText}</MainButton>
			</Flex>
		</Wrapper>
	)
}

