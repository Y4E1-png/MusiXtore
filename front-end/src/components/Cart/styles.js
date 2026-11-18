import styled, { css } from "styled-components";
import { Link } from "react-router";

export const CartSummary = styled.div`
  margin-top: 24px;
  padding: clamp(16px, 3vw, 24px);
  border: 1px solid rgba(245, 238, 232, 0.12);
  border-radius: 16px;
  background: ${props => props.theme.colors.surface};
`;

export const CartTotal = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  margin: 0 0 18px;

  strong {
    color: ${props => props.theme.colors.primary};
    font-size: 24px;
    font-variant-numeric: tabular-nums;
  }
`;

export const CartActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

const actionStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  padding: 10px 18px;
  border: 1px solid transparent;
  border-radius: 999px;
  font: inherit;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
`;

export const ContinueLink = styled(Link)`
  ${actionStyle}
  border-color: rgba(245, 238, 232, 0.24);
  color: ${props => props.theme.colors.text};

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
`;

export const ClearCartButton = styled.button`
  ${actionStyle}
  background: transparent;
  color: ${props => props.theme.colors.error};

  &:hover {
    border-color: currentColor;
  }
`;

export const CheckoutLink = styled(Link)`
  ${actionStyle}
  margin-left: auto;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryText};

  &:hover {
    background: ${props => props.theme.colors.primaryHover};
  }

  @media (max-width: 520px) {
    margin-left: 0;
  }
`;

export const CartGrid = styled.div`
  display: grid;
  gap: 12px;
`;


export const CartEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 240px;
  padding: 40px 20px;
  text-align: center;

  @media (max-width: 760px) {
    padding: 32px 12px;
  }
`;

export const CartEmptyIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin-bottom: 20px;
  border: 1px solid rgba(239, 195, 164, 0.16);
  border-radius: 50%;
  background-color: rgba(239, 195, 164, 0.06);
  color: ${props => props.theme.colors.primary};
`;

export const CartEmptyTitle = styled.h3`
  max-width: 520px;
  margin: 0 0 12px;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 30px;
  font-weight: 400;
  line-height: 1.2;
  text-wrap: balance;
  color: ${props => props.theme.colors.text};

  @media (max-width: 760px) {
    font-size: 26px;
  }
`;

export const CartEmptyDescription = styled.p`
  max-width: 440px;
  margin: 0;
  font-size: 16px;
  line-height: 1.7;
  color: ${props => props.theme.colors.secondaryText};
`;


export const CartTitle = styled.h2`
  margin: 0 0 24px;
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 32px;
  font-weight: 300;
  line-height: 1.2;
  text-align: center;
  color: ${props => props.theme.colors.text};
`;

export const CartContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 30px 48px;

  @media (max-width: 760px) {
    padding: 24px 20px 40px;
  }
`;
