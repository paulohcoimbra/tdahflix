import React, { useState} from 'react';
import ThumbTdah from '../ThumbTdah';
import {CarouselStyle, Arrow, Wrapper} from './style';

export default function CarouselTdah({ videos }) {
  const [move, setMove] = useState(0);

  function action(value) {
    setMove(( oldValue ) => oldValue + value);
  }

  return (
    <CarouselStyle>
      <Arrow onClick={() => action(-1)} left/>
      <Wrapper move={move}>
      {videos.map(({ src, alt, avatar, channelName, videoTitle, videoTime }) => (
        <ThumbTdah
        src={src}
        alt={alt}
        avatar={avatar}
        channelName={channelName}
        videoTitle={videoTitle}
        videoTime={videoTime}
        />
        ))}
      </Wrapper>
      <Arrow onClick={() => action(1)} right/>
    </CarouselStyle>
  );
}