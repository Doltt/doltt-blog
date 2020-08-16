import styled from 'styled-components'

export const Wrapper = styled.div`
	width:100%;
	height:100%;
	@media (max-width: 680px) {
		margin-bottom: 2rem;
		text-align: center;

		&:last-child {
		margin-bottom: unset;
	}
`

export const Grow = styled.div`
	height:150px;
	img {
		width:250px;
		transform = all 0.2s ease-in-out;

		&:hover {
			transform: scale(1.1);
			transition: all 0.2s ease-in-out;
    	}
	}
	@media (max-width: 680px) {
		height: 160px;

		img {
		width: 250px;
		}
	}
`

export const Title = styled.h4`
	padding:40px;
`
