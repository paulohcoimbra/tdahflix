import styled, { css } from 'styled-components';
import { WrapperThumb } from '../ThumbTdah/style';
import arrowImg from '../../assets/img/arrow.svg'


export const Wrapper = styled.div`
  display: flex;
  position: relative;
  transition: transform 200ms linear;

  ${({ move }) =>
    css`
      transform: translateX(calc((320rem * ${move}) * -1))
    `}
`

export const Arrow = styled.button`
  position: absolute;
  height: 40rem;
  width: 40rem;
  opacity: 0;
  border: none;
  transition: opacity 300ms linear;
  align-self: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  ${( { left } ) => 
    left &&
    css`
      left: 10rem;
      transform: rotateY(180deg);
    `}

  ${( { right } ) => 
    right &&
    css`
      right: 10rem;
    `}

  &::after {
    content: url(${arrowImg});
    display: inline-block;
    transition: transform 100ms linear;
  }

  &:active::after {
    transform: translateX(5rem);
  }

  &:hover {
    background-color: #fff;
  }
`

export const CarouselStyle = styled.div`
  --thumb-width: 200rem;
  width: 100%;
  display: flex;
  align-self: flex-start;

  /* overflow: hidden; */
  
  & ${WrapperThumb} {
    width: var(--thumb-width);

    @media(max-width: 800px) {
        display: block;
        width: 300rem;
    }
  }
  
  @media(max-width: 800px) {
    width: 100%;
  }

  &:hover {
    & ${Arrow} {
      opacity: 0.8;
    }
  }
`