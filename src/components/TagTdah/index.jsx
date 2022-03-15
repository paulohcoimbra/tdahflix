import styled, { css } from 'styled-components';

const TagTdah = styled.h2`
    display: inline-block;
    font-size: 30rem;
    border-radius: 4px;
    background-color: ${({color}) => color};
    color: var(--color-gray-light);
    padding: 10rem 10rem;
    
    ${({small}) => small && css`
        font-size: 16rem;
        padding: 8rem 10rem;
    `};
`;

export default TagTdah;
