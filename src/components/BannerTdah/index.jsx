import styled from 'styled-components';
import container from '../../tools/container';
import TagTdah from '../TagTdah';
import TitleTdah from '../TitleTdah';
import DescriptionTdah from '../DescriptionTdah';

export const BackgroundImage = styled.img`
    position: absolute;
    width: 100vw;
    height: auto;
    opacity: 0.2;
    z-index: -1;

    @media(max-width: 800px) {
        height: var(--height);
        opacity: 0.5;
    }
`;

export const Text = styled.div`
    padding-top: 10rem;
    
    ${TagTdah} {
        margin-bottom: 10rem;
    }

    ${TitleTdah} {
        margin-bottom: 10rem;
    }

    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        margin-top: 20rem;

        ${DescriptionTdah} {
            display: none;
        }

        ${TagTdah} {
            margin: 10rem 0rem;
        }
    }
`;

export const BannerTdah = styled.section`
    --height: 300rem;
    ${container};
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 50vh;

    @media(max-width: 800px) {
        flex-direction: column;
        height: var(--height);
        justify-content: flex-end;
    }
`;
