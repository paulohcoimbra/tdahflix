import React from 'react';
import TagTdah from '../../components/TagTdah';
import { BannerTdah, Text, BackgroundImage } from '../../components/BannerTdah';
import TitleTdah from '../../components/TitleTdah';
import DescriptionTdah from '../../components/DescriptionTdah';
import ThumbTdah from '../../components/ThumbTdah';

import snesThumb from '../../assets/img/snes_games.jpg';
import snesAvatar from '../../assets/img/snes_avatar.jpg';
import SectionTdah from '../../components/SectionTdah';
import CarouselTdah from '../../components/CarouselTdah';

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
      <BackgroundImage src={snesThumb} alt={title} />
      <BannerTdah>
        <Text>
          <TagTdah>Games</TagTdah>
          <TitleTdah>{title}</TitleTdah>
          <DescriptionTdah>Snes role playing games top</DescriptionTdah>
        </Text>
        <ThumbTdah
          src={snesThumb}
          alt="thumb do video SNESdrunk"
          avatar={snesAvatar}
          channelName="SNES drunk"
          videoTitle={title}
          videoTime="06:45"
        />
      </BannerTdah>
      <SectionTdah>
        <TagTdah small>Programming</TagTdah>
        <CarouselTdah videos={videos}/>
      </SectionTdah>
      <SectionTdah>
        <TagTdah small>Music</TagTdah>
        <CarouselTdah videos={videos}/>
      </SectionTdah>
    </>
  );
}
