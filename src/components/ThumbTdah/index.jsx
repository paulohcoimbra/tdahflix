import React from 'react';
import {
  WrapperThumb, Thumb, Background, Title, Timer,
} from './style';
import AvatarTdah from '../AvatarTdah';

export default function ThumbTdah({
  src, alt, avatar, channelName, videoTitle, videoTime,
}) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarTdah photo={avatar} channelName={channelName} />
        <Title>{videoTitle}</Title>
        <Timer>{videoTime}</Timer>
      </WrapperThumb>
    </Background>
  );
}
