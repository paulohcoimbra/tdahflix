import styled from 'styled-components';
import { WrapperAvatar } from '../AvatarTdah/styles';

export const Timer = styled.span`
    position: absolute;
    right: var(--space);
    bottom: var(--space);
    font-size: 12rem;
    color: var(--color-gray-light);
    /* background-color: #333333; */
    padding: 2rem 4rem;
    opacity: 0;
`;

export const Title = styled.figcaption`
    position: absolute;
    left: var(--space);
    bottom: var(--space);
    font-size: 20rem;
    color: var(--color-gray-light);
    /* background-color: #010101; */
    padding: 4rem 6rem;
    transform: translateY(calc((100% + var(--space)) * -1));
    opacity: 0;
    transition: transform 200ms linear, opacity 100ms linear;
`;

export const Thumb = styled.img`
    width: 100%;
    transition: filter 100ms linear;
`;

export const WrapperThumb = styled.figure`
    position: relative;
    width: 450px;
    min-height: 110px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 50ms linear;
    
    & > ${WrapperAvatar} {
        position: absolute;
        top: var(--space);
        left: var(--space);
        margin-right: 10rem;
        transform: translateX(calc((100% + var(--space)) * -1));
        opacity: 0;
        transition: transform 200ms linear, opacity 100ms linear;
    }

    @media(max-width: 800px) {
        display: none;
    }
`;

export const Background = styled.div`
    --space: 5rem;
    --move-space: calc(var(--space) *-1);

    
    position: relative;
    margin-right: 10rem;

    &::before,
    &::after {
        content: '';
        width: calc(var(--space) * 1.4);
        height: calc(var(--space) * 1.4);
        background-color: var(--color-default);
        position: absolute;

        z-index: -1;
        transition: transform 50ms linear;
    }

    &::before {
        top: 0;
        right: 0;
        transform-origin: right top;
        transform: rotate(45deg) scale(0);
    }

    &::after {
        bottom: 0;
        left: 0;
        transform-origin: left bottom;
        transform: rotate(-45deg) scale(0);
    }

    &:hover {
        background-color: var(--color-default);
        &::before {
            transform: rotate(45deg) scale(1);
        }
        &::after {
            transform: rotate(-45deg) scale(1);
        }
        & > ${WrapperThumb} {
            transform: translate(var(--move-space), var(--move-space));
            
            & > ${Thumb} {
                filter: brightness(0.6);
            }

            & > ${WrapperAvatar} {
                transform: translateX(0);
                opacity: 1;
                transition: transform 200ms 200ms linear, opacity 200ms 300ms linear;
            }

            & > ${Title} {
                transform: translateY(0);
                opacity: 1;
                transition: transform 200ms 200ms linear, opacity 200ms 300ms linear;

            }

            & > ${Timer} {
                opacity: 1;
                transition: opacity 200ms 300ms linear;
            }
        }
    }
`;
