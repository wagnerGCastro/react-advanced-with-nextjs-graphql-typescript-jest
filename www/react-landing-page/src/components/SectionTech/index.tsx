import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

// import icons from './content'
import { SectionTechProps } from 'types/api'
import * as H from 'utils/helpers'

import * as S from './styles'

type Props = {
  title: SectionTechProps['title']
  techIcons: SectionTechProps['techIcons']
}

const SectionTech = ({ title, techIcons }: Props) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ title, icon }) => (
          <S.Icon key={title}>
            <S.Icons
              src={H.getImageUrl(icon.url)}
              alt={H.getImageUrl(icon.alternativeText)}
              loading="lazy"
            />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
