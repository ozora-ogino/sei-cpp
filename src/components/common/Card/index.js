import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  background: #ffffff;
  height: 100%;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProjectsCard = styled.div`
  padding: 1rem;
  background: #ffffff;
  height: 100%;
  border: solid 1px #cfd8dc;
  border-radius: .3rem;

  h4 {
    color: #212121;
  }

  p {
    color: #212121;
  }
  
  a {
    color: #212121;
  }
  @media (max-width: 680px) {
    border-radius: 0;
    border: none;
  }
`;

export const CourseCard = styled.div`
  padding: 1rem;
  background: #ffffff;
  height: 100%;
  border: solid 1px #cfd8dc;
  border-radius: .3rem;

  h4 {
    color: #212121;
  }

  p {
    color: #212121;
  }
  
  a {
    color: #212121;
  }

  @media (max-width: 680px) {
    border-radius: 0;
    border: none;
  }
`;
