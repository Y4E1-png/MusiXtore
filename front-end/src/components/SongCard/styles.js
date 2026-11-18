import styled from 'styled-components';

export const CardContainer = styled.article`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.surface};
  background-image: linear-gradient(to top, rgba(127, 53, 4, 0.19), rgba(240, 136, 66, 0.06) 17%, transparent 38%);
  border: 1px solid rgba(245, 238, 232, 0.15);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.24);
  color: ${props => props.theme.colors.text};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    transition: transform 0.2s ease;
  }
`;

export const CardCover = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 9px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 12px 48px 6px 4px;
`;

export const CardTitle = styled.h3`
  margin: 0 0 6px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.29;
  overflow-wrap: anywhere;
`;

export const CardArtist = styled.p`
  margin: 0 0 6px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  color: ${props => props.theme.colors.secondaryText};
  font-weight: 600;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardData = styled.p`
  margin: auto 0 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: ${props => props.theme.colors.text};  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AddButton = styled.button`
  position: absolute;
  bottom: 12px;
  right: 12px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid rgba(245, 238, 232, 0.3);
  border-radius: 50%;
  background-color: ${props => props.$isInCart ? props.theme.colors.surface : 'rgba(11, 13, 14, 0.75)'};
  color: ${props => props.theme.colors.text};
  font: inherit;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryText};
    transition: background-color 0.2s ease, transform 0.2s ease;
    transform: translateY(-1.5px);
  }

  @media (max-width: 900px) {
    width: 44px;
    height: 44px;
  }
`;
