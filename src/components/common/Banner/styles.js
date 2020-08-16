import styled from 'styled-components'

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

export const Slogan = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:center;
  padding:1rem 0;
  text-align:center;

  p{
    font-size:26px;
    color:#5D5D5C;
    font-weight:300;
    margin:0 auto;

  }

  @media (max-width: 680px) {
    p{
      font-size:24px;
    }
  }
`

export const Intro = styled.div`
    color: #866c5b;
    font-size: 16px;
    margin-top: 0.5rem;
    padding: 1.25rem 1.5rem 1rem;
    background-color:#FEFAF7;

`
export const Date = styled.div`
  margin: 20px;
  font-size: 14px;
  color: #8590a6;


`