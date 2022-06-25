import React from 'react';

import TagTdah from '../../components/TagTdah';
import { BannerTdah, Text } from '../../components/BannerTdah';
import TitleTdah from '../../components/TitleTdah';
import DescriptionTdah from '../../components/DescriptionTdah';
import ThumbTdah from '../../components/ThumbTdah';

import SectionTdah from '../../components/SectionTdah';
import CarouselTdah from '../../components/CarouselTdah';

import data from '../../data/dados_iniciais.json'

const getFirst = () => {
  console.log(data.categories)
  return data.categories[0]
}

export default function Home() {
  return (
    <>
      <BannerTdah>
        <Text>
          <TagTdah>{getFirst().title}</TagTdah>
          <TitleTdah>{getFirst().videos[0].title}</TitleTdah>
          <DescriptionTdah>{getFirst().link_extra.text}</DescriptionTdah>
        </Text>
        <ThumbTdah
          src={getFirst().videos[0].src}
          alt={getFirst().videos[0].alt}
          avatar={getFirst().videos[0].avatar}
          channelName={getFirst().videos[0].channelName}
          videoTitle={getFirst().videos[0].title}
          videoTime={getFirst().videos[0].videoTime}
        />
      </BannerTdah>     
      {
        data.categories.map(c => {
          return (
            <SectionTdah>
              <TagTdah small color={c.color}>{c.title}</TagTdah>
              <CarouselTdah videos={c.videos} />
            </SectionTdah>
          )
        })
      }
    </>
  );
}
