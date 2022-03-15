import React, { useState} from 'react'
import ThumbTdah from '../ThumbTdah'
import {CarouselStyle, Arrow, Wrapper} from './style'

export default function CarouselTdah({ videos }) {
  const [move, setMove] = useState(0)
  const imgWidth = 300

  function action(value) {
    setMove(( oldValue ) => oldValue + value)
  }

  function rightShow() {
    const width = window.innerWidth
    const maxItensOnScreen = Math.round(width / imgWidth)
    console.log(maxItensOnScreen)
    return move + maxItensOnScreen < videos.length
  }

  function leftShow() {
    return move > 0
  }

  return (
    <CarouselStyle>
      <Arrow onClick={() => action(-1)} left show={leftShow()}/>
      <Wrapper move={move}>
      {videos.map(({ src, alt, avatar, channelName, title, videoTime }) => (
        <ThumbTdah
        src={src}
        alt={alt}
        avatar={avatar}
        channelName={channelName}
        videoTitle={title}
        videoTime={videoTime}
        />
        ))}
      </Wrapper>
      <Arrow onClick={() => action(1)} right show={rightShow()}/>
    </CarouselStyle>
  );
}