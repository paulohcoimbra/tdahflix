import React from 'react';
import { BannerTdah } from '../../components/BannerTdah';
import TitleTdah from '../../components/TitleTdah';
import LinkTdah from '../../components/LinkTdah';
import DescriptionTdah from '../../components/DescriptionTdah';

export default function Erro404() {
  return (
    <>
      <BannerTdah>
        <TitleTdah>404</TitleTdah>
        <DescriptionTdah>
          Ooooo essa página não existe, vai pra
          {' '}
          <LinkTdah href="/">Home</LinkTdah>
        </DescriptionTdah>
        <iframe src="https://mariosouto.com/flappy-bird-devsoutinho/" width="600" height="500" />
      </BannerTdah>
    </>
  );
}
