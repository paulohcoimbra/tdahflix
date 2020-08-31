import React from 'react';

import TagTdah from '../../components/TagTdah';
import { BannerTdah, Text } from '../../components/BannerTdah';
import TitleTdah from '../../components/TitleTdah';
import DescriptionTdah from '../../components/DescriptionTdah';
import ThumbTdah from '../../components/ThumbTdah';

import SectionTdah from '../../components/SectionTdah';
import CarouselTdah from '../../components/CarouselTdah';

import snesThumb from '../../assets/img/snes_games.jpg';
import snesAvatar from '../../assets/img/snes_avatar.jpg';

const title = '13 Best Super Nintendo Role Playing Games';

const videos = [
  {
    src: snesThumb,
    alt: "thumb do video SNESdrunk",
    avatar: snesAvatar,
    channelName: "SNES drunk",
    videoTitle: "13 Best Super Nintendo Role Playing Games",
    videoTime: "06:45",
  },
  {
    src: snesThumb,
    alt: "thumb do video SNESdrunk",
    avatar: snesAvatar,
    channelName: "SNES drunk",
    videoTitle: "13 Best Super Nintendo Role Playing Games",
    videoTime: "06:45",
  },
  {
    src: snesThumb,
    alt: "thumb do video SNESdrunk",
    avatar: snesAvatar,
    channelName: "SNES drunk",
    videoTitle: "13 Best Super Nintendo Role Playing Games",
    videoTime: "06:45",
  },
  {
    src: snesThumb,
    alt: "thumb do video SNESdrunk",
    avatar: snesAvatar,
    channelName: "SNES drunk",
    videoTitle: "13 Best Super Nintendo Role Playing Games",
    videoTime: "06:45",
  },
  {
    src: snesThumb,
    alt: "thumb do video SNESdrunk",
    avatar: snesAvatar,
    channelName: "SNES drunk",
    videoTitle: "13 Best Super Nintendo Role Playing Games",
    videoTime: "06:45",
  },
  {
    src: snesThumb,
    alt: "thumb do video SNESdrunk",
    avatar: snesAvatar,
    channelName: "SNES drunk",
    videoTitle: "13 Best Super Nintendo Role Playing Games",
    videoTime: "06:45",
  },
  {
    src: snesThumb,
    alt: "thumb do video SNESdrunk",
    avatar: snesAvatar,
    channelName: "SNES drunk",
    videoTitle: "13 Best Super Nintendo Role Playing Games",
    videoTime: "06:45",
  },
  {
    src: snesThumb,
    alt: "thumb do video SNESdrunk",
    avatar: snesAvatar,
    channelName: "SNES drunk",
    videoTitle: "13 Best Super Nintendo Role Playing Games",
    videoTime: "06:45",
  },
]

export default function Home() {
  return (
    <>
      <BannerTdah>
        <Text>
          <TagTdah>Games</TagTdah>
          <TitleTdah>{title}</TitleTdah>
          <DescriptionTdah>Snes role playing games top</DescriptionTdah>
        </Text>
        <ThumbTdah
          src="https://i.ytimg.com/vi/Lq594XmpPBg/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC1mkUpE7X8m0WsNznewS8j5jB8SA"
          alt="thumb do video SNESdrunk"
          avatar={snesAvatar}
          channelName="SNES drunk"
          videoTitle={title}
          videoTime="06:45"
        />
      </BannerTdah>
      {/* <SectionTdah>
        <TagTdah small>Programming</TagTdah>
        <CarouselTdah videos={videos}/>
      </SectionTdah>*/}
      <SectionTdah>
        <TagTdah small>Music</TagTdah>
        <CarouselTdah videos={videos}/>
      </SectionTdah> 
    </>
  );
}
