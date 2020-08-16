import styled from 'styled-components'

export const Wrapper = styled.div`
	margin-bottom: 1.45rem;
	color: #212121;
	padding: 5rem 0;
	clip-path: polygon(0% 10%, 100% 0, 100% 90%, 0 100%);
	background: #f9f9f9;
	text-align: center;

	@media (max-width: 680px) {
		padding: 4rem 0;
		clip-path: polygon(0% 2%, 100% 0, 100% 98%, 0 100%);
	}
`
export const Grid = styled.div`
	padding: 2rem 0;
	display: grid;
	align-items: center;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 4fr;
	gap: 1.2rem 3rem;

	@media (max-width: 960px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 680px) {
		grid-template-columns: 1fr;
	}
`