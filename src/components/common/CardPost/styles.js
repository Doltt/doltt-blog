import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1.45rem;
  color: #212121;
  padding: 1rem 0;
  justify-content:center;

  @media (max-width: 680px) {
    padding: 1rem 0;
  }

  a{
    text-decoration: none;
  }
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 3fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);

  }
`
export const Post = styled.div`
  border-radius: 0.2rem;
  box-shadow: 0 0 10px 0 rgba(33, 33, 33, 0.14);
  background: #fff;
  transition: 0.7s;
  width: 400px;
  overflow: hidden;
  height:100%;

  &:hover,
  &:focus {
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.2);
    transition: 0.7s;
  }

  p{
    color:gray;
  }

  img{
    height:400px;
  }

    @media (max-width: 680px) {
    width:300px;
    img {
      height:250px;
    }
  }

`

export const ArticleContent = styled.div`
  padding: 1rem;

  @media (max-width: 680px) {
    flex: 2;
    overflow: hidden;
    padding: 0 1rem;
  }
`

export const ArticleTitle = styled.h3`
  color: #212121;

  @media (max-width: 680px) {
    margin-bottom: 0.1rem;
  }
`

export const Paragraph = styled.p`
  color: #616161;
  overflow-y: hidden;

  @media (max-width: 680px) {
    height: 20px;
    overflow-y: hidden;
    margin-bottom: 0.1rem;
    font-size: 10pt;
  }
`
