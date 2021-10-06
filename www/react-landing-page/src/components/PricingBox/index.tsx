import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import { PricingBoxProps } from 'types/api'
import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = (pBox: PricingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De R$<span>{pBox.totalPrice},00</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{pBox.numberInstallments}x de</span> R${pBox.priceInstallments}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList dangerouslySetInnerHTML={{ __html: pBox.benefits }} />

    <Button href={pBox.button.url} onClick={onClick} withPrice>
      <p>{pBox.button.label}</p>
      <div>
        <S.ButtonFullPrice>R${pBox.totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>
          R${pBox.numberInstallments * pBox.priceInstallments}
        </S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
