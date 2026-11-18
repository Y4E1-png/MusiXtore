import styled from 'styled-components';

export const LibraryContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 30px 48px;

  @media (max-width: 760px) {
    padding: 24px 20px 40px;
  }
`;

export const LibraryTitle = styled.h2`
  margin: 0 0 24px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.2;
  color: ${props => props.theme.colors.text};
`;

export const LibraryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

