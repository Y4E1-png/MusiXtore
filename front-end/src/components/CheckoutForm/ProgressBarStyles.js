import styled from "styled-components";

export const Steps = styled.ol`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  width: min(520px, calc(100% - 32px));
  margin: 12px auto 0;
  padding: 0;
  list-style: none;
`;

export const Step = styled.li`
  display: grid;
  gap: 8px;
  color: ${props => props.theme.colors.secondaryText};
  font-size: 14px;

  &[aria-current="step"] {
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
  }

  &::after {
    content: "";
    height: 4px;
    border-radius: 999px;
    background: ${props => props.$reached ? props.theme.colors.primary : "rgba(245, 238, 232, 0.18)"};
    transition: background-color 180ms ease;
  }
`;