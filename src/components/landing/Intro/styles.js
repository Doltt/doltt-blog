import styled from 'styled-components'

export const Wrapper = styled.div `
	padding: 2rem 0;
	p{
		color: gray;
	}

`
export const Flex = styled.div `
	${({ ButtonDisplay }) =>
    ButtonDisplay === 'false' &&
    `
			display: none;
	`}

	${({ ButtonDisplay }) =>
    ButtonDisplay === 'true' &&
    `
			display: flex;
			alig - items: center;
	`}
`

export const MainButton = styled.a `
	margin-top:2rem;
	color: #fff;
	text-decoration: none;
	padding: 0.9rem 1.4rem;
	background: #00c3ff;
	border-radius: 0.3rem;
	box-shadow: rgba(0, 196, 255, 0.9) 0px 13px 19px -6px;
	transition: 0.5s;

	&:hover {
		box-shadow: 0px 0px 17px 0px rgba(0, 196, 255, 0.36);
		transition: 0.5s;
  	}
`