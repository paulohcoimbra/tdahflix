import styled from 'styled-components';
import container from '../../tools/container';
import TagTdah from '../TagTdah';
import TitleTdah from '../TitleTdah';
import DescriptionTdah from '../DescriptionTdah';

export const Text = styled.div`

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
    ${container};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 800px) {
        flex-direction: column;
        justify-content: flex-end;
    }
`;
