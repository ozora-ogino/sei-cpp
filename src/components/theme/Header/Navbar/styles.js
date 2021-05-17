import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.a`
  color: #e0e0e0;

  @media (max-width: 960px) {
    color: #unset;
  }
  span {
    font-size: 1.6rem;
    color: #757575;
    // font-weight: bold;
  }
`;
