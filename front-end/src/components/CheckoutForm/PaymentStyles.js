import styled from "styled-components";

export const PaymentForm = styled.form`
  display: grid;
  gap: 10px;
  width: min(520px, calc(100% - 32px));
  margin: 24px auto 48px;
  padding: clamp(18px, 4vw, 32px);
  border: 1px solid rgba(245, 238, 232, 0.14);
  border-radius: 16px;
  background: ${props => props.theme.colors.surface};

  h2 {
    margin: 0;
    font-family: Montserrat, Arial, sans-serif;
    font-weight: 400;
  }

  p {
    margin: 0 0 12px;
    color: ${props => props.theme.colors.secondaryText};
  }

  label {
    display: block;
    font-size: 14px;
  }
`;

export const PaymentFields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 6px;

  > div {
    display: grid;
    gap: 8px;
  }
`;

export const PaymentInput = styled.input`
  width: 100%;
  min-width: 0;
  min-height: 46px;
  padding: 10px 12px;
  border: 1px solid rgba(245, 238, 232, 0.22);
  border-radius: 10px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font: inherit;

  &::placeholder {
    color: ${props => props.theme.colors.secondaryText};
  }
`;

export const PaymentButton = styled.button`
  min-height: 46px;
  margin-top: 10px;
  border: 0;
  border-radius: 999px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryText};
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.primaryHover};
  }
`;
