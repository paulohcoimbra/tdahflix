import styled from 'styled-components'

const ButtonTdah = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 12rem 30rem;
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    border: 1px solid var(--color-gray-light);
    border-radius: 4px;
    font-size: 15rem;
    cursor: pointer;
    transition: box-shadow 200ms linear, border 200ms linear, transform 100ms linear;

    overflow: hidden;

    &::before {
        content:'';
        position: absolute;
        width: 150%;
        height: 100%;
        background-color: var(--color-primary);
        transform: translateX(-100%) skew(60deg);
        transition: transform 100ms linear;
        opacity: 0.7;
    }

    &:hover {
        box-shadow: 0 0 1em red;
        border: 1px solid var(--color-primary);
    }

    &:active {
        transform: scale(0.95);
    }
    
    &:hover::before {
        transform: translateX(0) skew(60deg);
    }
`

export default ButtonTdah;