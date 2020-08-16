import styled from 'styled-components'

export const Wrapper = styled.a`
  padding: 1rem 0;
`

export const Center = styled.div`
    display: flex;
    padding: 1rem 0;
    justify-content: center;
    align-items: center;

`
export const MainButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 30px;
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