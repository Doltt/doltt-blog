import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
  	color:gray;
  }
  @media (max-width: 680px) {
    flex-direction:column;
    justify-content:center;
  }
`
