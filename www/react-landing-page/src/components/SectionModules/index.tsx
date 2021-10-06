import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

// import content from './content'
import { SectionModulesProps } from 'types/api'
import * as S from './styles'

const SectionModules = ({ title, cardTextList }: SectionModulesProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {cardTextList.map(({ title, subTitle, description }, index) => (
        <CardModule key={index} title={title} subTitle={subTitle}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
