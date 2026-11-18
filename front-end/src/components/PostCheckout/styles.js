import styled from "styled-components";

export const Receipt = styled.section`
  width: min(540px, calc(100% - 32px));
  margin: 16px auto 56px;
  padding: clamp(16px, 4vw, 30px);
  border: 1px solid rgba(245, 238, 232, 0.13);
  border-radius: 26px;
  background: ${({ theme }) => theme.colors.background};
`;

export const Status = styled.div`
  padding: 24px 0 32px;
  text-align: center;

  span {
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    margin: 0 auto 18px;
    border-radius: 50%;
    background: rgba(239, 195, 164, 0.12);
    color: ${({ theme }) => theme.colors.primary};
    font-size: 30px;
  }

  h2 { margin: 0 0 8px; font-size: clamp(24px, 5vw, 32px); }
  p { margin: 0; color: ${({ theme }) => theme.colors.secondaryText}; }
`;

export const Songs = styled.ul`
  display: grid;
  gap: 10px;
  list-style: none;
  margin: 0 0 16px;
  padding: 0;

  li {
    display: grid;
    grid-template-columns: 52px minmax(0, 1fr) auto;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-radius: 14px;
    background: ${({ theme }) => theme.colors.surface};
    overflow-wrap: anywhere;
  }

  .cover {
    display: grid;
    place-items: center;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 9px;
    background: ${({ theme }) => theme.colors.background};
  }

  img { width: 100%; height: 100%; object-fit: cover; }
  small { display: block; color: ${({ theme }) => theme.colors.secondaryText}; }
  b { white-space: nowrap; font-variant-numeric: tabular-nums; }
`;

export const Summary = styled.section`
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.surface};

  h3 { margin: 0; padding: 14px 16px; font-size: 16px; }
  dl { margin: 0; padding: 12px 16px; border-top: 1px solid rgba(245, 238, 232, 0.12); }
  dl > div { display: flex; justify-content: space-between; gap: 12px; padding: 4px 0; }
  dt { color: ${({ theme }) => theme.colors.secondaryText}; }
  dd { margin: 0; font-variant-numeric: tabular-nums; }
  dl > div:last-child dd { color: ${({ theme }) => theme.colors.primary}; font-weight: 700; }
`;

export const HomeButton = styled.button`
  display: block;
  width: min(100%, 270px);
  min-height: 46px;
  margin: 26px auto 0;
  border: 0;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: 600;
  cursor: pointer;

  &:hover { background: ${({ theme }) => theme.colors.primaryHover}; }
`;
