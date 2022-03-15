import styled from 'styled-components';
import ButtonTdah from '../ButtonTdah';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0.7697841726618705) 50%, rgba(0,0,0,0) 100%); 
    z-index: 1;
    //max-width: 100vw;
    @media(max-width: 800px) {
        justify-content:center;

        & ${ButtonTdah} {
            background-color: var(--color-black-dark);
            border-radius: 0;
            border: 0;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
        }
    }
`;

export default Header;
