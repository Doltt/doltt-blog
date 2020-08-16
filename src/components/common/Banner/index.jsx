import React from 'react'
import { Container } from 'components/common'
import { BannerImg, Slogan, Intro, Date } from './styles'

export const Banner = ({ ImgPath, Title, SubTitle, PostIntro, PublishDate }) => {
  return(
      <Container>
        <BannerImg><img src={ ImgPath } alt="banner" /></BannerImg>
        <Slogan>
          <p>{Title}</p>
          <p>{SubTitle}</p>
          <Date>{PublishDate}</Date>
        	<Intro>{PostIntro}</Intro>
        </Slogan>
      </Container>
  )
}


