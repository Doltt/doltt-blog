import styled from 'styled-components'

export const Wrapper = styled.div`
	width:100%;

	@media (max-width: 680px) {
	img{
		display:flex;
		justify-content:center;
	}
}
`

export const ContactMe = styled.div`
	p{
		color: gray;
	}

`
export const BannerImg = styled.div`
  background-color:#07060B;
  display:flex;
  justify-content:center;
  align-items:center;
  overflow: hidden;
  height:100%;
	img{
    height:300px;
  }

    @media (max-width: 680px) {
    img {
      height:200px;
    }
  }
`