import React from 'react'
import {ArticleWrapper, Content } from './styles'

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

export const Post = ({ html }) => {
  return (
    <ArticleWrapper>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </ArticleWrapper>
  )
}