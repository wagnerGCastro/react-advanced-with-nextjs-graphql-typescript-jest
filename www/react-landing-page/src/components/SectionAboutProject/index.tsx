import React from 'react'
import Heading from 'components/Heading'
import Container from 'components/Container'
import { SectionAboutProjectProps } from 'types/api'
import * as H from 'utils/helpers'
import * as S from './styles'

type Props = {
  sap: SectionAboutProjectProps
}

const SectionAboutProject = ({ sap }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <source
            srcSet={H.getImageUrl(`${sap.image.url}?webp`)}
            type="image/webp"
          />
          <source srcSet={H.getImageUrl(sap.image.url)} type="image/png" />
          <img
            src={H.getImageUrl(sap.image.url)}
            loading="lazy"
            alt={sap.image.alternativeText}
          />
        </S.Image>
        <div>
          <Heading>{sap.title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: sap.description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
