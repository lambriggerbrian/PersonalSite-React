/** @jsxImportSource @emotion/react */

import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const HeaderFont = css`
  font-family: 'Courier New', 'Segoe UI', 'Helvetica', 'sans-serif';
  text-decoration: none;
  color: #23a9f2;
`;

export const LinkTextStyle = css`
  color: #23a9f2;
  font-family: 'Segoe UI', 'Helvetica', 'sans-serif';
  font-weight: bold;
  text-decoration: none;
`;

export const LinkTextSpan = styled.span`
  ${LinkTextStyle}
`;

export const PlaceholderDiv = styled.div`
  background-color: green;
  min-width: 40px;
  min-height: 40px;
`;

export const SpacerDiv = styled.div`
  height: 1200px;
  background-color: purple;
`;

export const GridDiv4x4 = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(8, auto);
    gap: 5px 5px;
  }

  @media (min-width: 1075px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto auto auto;
    gap: 10px 10px;
  }
`;

export const FadeInDiv = styled.div`
  --max-opacity: 0.5;
  animation-name: fadeIn;
  animation-duration: 0.3s;
  opacity: var(--max-opacity);

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export const SlideUpDiv = styled.div`
  animation-name: slideUp;
  animation-duration: 0.5s;

  @keyframes slideUp {
    0% {
      bottom: -100%;
    }
    100% {
      bottom: 0;
    }
  }
`;

export const SlideDownDiv = styled.div`
  animation-name: slideDown;
  animation-duration: 0.5s;

  @keyframes slideDown {
    0% {
      top: -100%;
    }
    100% {
      top: 0;
    }
  }
`;

export const LeftFlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: left;
  align-items: center;
`;

export const CenterFlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const RightFlexRow = styled.div`
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const LeftFlexCol = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: left;
  align-items: stretch;
`;

export const CenterFlexCol = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: stretch;
  text-align: center;
`;

export const RightFlexCol = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: Right;
  align-items: stretch;
`;
