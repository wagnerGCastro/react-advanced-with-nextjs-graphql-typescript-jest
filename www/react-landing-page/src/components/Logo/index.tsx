import React from 'react'
import { LogoProps } from 'types/api'
import * as S from './styles'
import * as H from 'utils/helpers'

const Logo = ({ alternativeText, url }: LogoProps) => (
  <S.LogoWrapper src={H.getImageUrl(url)} alt={alternativeText} />
)

export default Logo
