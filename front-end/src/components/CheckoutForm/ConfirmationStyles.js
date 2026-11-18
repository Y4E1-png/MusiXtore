import styled from "styled-components";

export const OrderItems = styled.div`
  display: grid;
  gap: 10px;
`;

export const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  margin-top: 6px;
  padding-top: 16px;
  border-top: 1px solid rgba(245, 238, 232, 0.14);

  strong {
    color: ${props => props.theme.colors.primary};
    font-size: 24px;
    font-variant-numeric: tabular-nums;
  }
`;

export const OrderActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 6px;

  > button {
    margin: 0;
    padding: 8px 14px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const BackButton = styled.button`
  min-height: 46px;
  border: 1px solid rgba(245, 238, 232, 0.24);
  border-radius: 999px;
  background: transparent;
  color: ${props => props.theme.colors.text};
  cursor: pointer;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
`;

export const OrderError = styled.div`
  padding: 10px 12px;
  border: 1px solid currentColor;
  border-radius: 10px;
  color: ${props => props.theme.colors.error};
`;
