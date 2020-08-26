import styled from 'styled-components';
import ImgLogo from '../../assets/img/Logo.png';

const LogoTdah = styled.img.attrs({ src: ImgLogo, alt: 'logo da tdahflix' })`
  max-width: 80px;
  cursor: pointer;
`;

export default LogoTdah;
