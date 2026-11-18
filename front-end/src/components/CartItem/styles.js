import styled from "styled-components";

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid rgba(245, 238, 232, 0.3);
  border-radius: 50%;
  background-color: rgba(11, 13, 14, 0.75);
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

export const CartItemContainer = styled.section`
  display: grid;
  grid-template-columns: clamp(44px, 12vw, 96px) minmax(0, 1fr) auto auto;
  align-items: center;
  gap: clamp(6px, 2vw, 20px);
  padding: clamp(8px, 2vw, 16px);
  border: 1px solid rgba(245, 238, 232, 0.12);
  border-radius: 16px;
  background: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.text};

  & > img {
    grid-column: 1;
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 10px;
  }

  & > section {
    grid-column: 2;
    overflow-wrap: anywhere;
  }

  & h1 {
    margin: 0 0 4px;
    font-size: clamp(15px, 2.5vw, 20px);
  }

  & h2,
  & p {
    margin: 0;
    color: ${props => props.theme.colors.secondaryText};
    font-size: 13px;
    font-weight: 400;
  }

  & > strong {
    grid-column: 3;
    color: ${props => props.theme.colors.primary};
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }
`;
