import styled from 'styled-components'

export const Wrapper = styled.div`
	height: 60px;
	padding: 0.8rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	a{
		color: #212121;
		text-decoration: none;
	}
`
export const Brand = styled.div`
  display: flex;
  align-items: center;

  img{
	  transition: 0.5s;
	  height: 2.2rem;
	  width: 2.2rem;
	  margin-bottom: 0;
	  margin-right: 1rem;

	  &:hover {
	    opacity: 0.7;
	    transition: 0.5s;
	    transform: rotate(360deg);
  }
`

export const Links = styled.div`
	a {
		color: #6d6d6d;
		text-decoration: none;
		margin-right: 1rem;

		&.current {
			color: #212121;
		}
	}
`
