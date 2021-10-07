import React from 'react'
import Slider from 'react-slick'

import Container from 'components/Container'
import Heading from 'components/Heading'
import ReviewCard from 'components/ReviewCard'

import { SectionReviewsProps } from 'types/api'
// import reviews from './content'
import * as H from 'utils/helpers'
import * as S from './styles'

const settings = {
  dots: true,
  arrows: false,
  slidesToShow: 2,
  infinite: false,
  speed: 500,
  rows: 2,
  slidesPerRow: 1,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const SectionReviews = ({ title, cardReviews }: SectionReviewsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      <Slider {...settings}>
        {cardReviews.map(({ name, photo, description }, index) => (
          <ReviewCard
            key={index}
            name={name}
            image={H.getImageUrl(photo.url)}
            description={description}
            id={index}
          />
        ))}
      </Slider>
    </S.Content>
  </Container>
)

export default SectionReviews
