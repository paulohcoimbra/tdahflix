import styled from 'styled-components';
import TagTdah from '../TagTdah';
import container from '../../tools/container';

const SectionTdah = styled.section`
  ${container}
  display: flex;
  flex-direction: column;
  align-items: center;

  & > ${TagTdah} {
    align-self: flex-start;
  }

  @media (max-width: 360px) {
    & > ${TagTdah}:first-child {
      font-size: 46rem;
    }
  }
`

export default SectionTdah;