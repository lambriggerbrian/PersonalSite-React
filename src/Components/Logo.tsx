/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/core';
import { useViewport } from './Responsive';
import { LinkTextStyle } from '../Styles';

const MobileStyle = css`
  width: 10%;
  height: 100%;
`;

const DesktopStyle = css`
  width: 100%;
  height: 10%;
`;

export const Logo = () => {
  const { useMobile } = useViewport();
  return (
    <div
      css={css`
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        ${useMobile() ? MobileStyle : DesktopStyle};
      `}
    >
      <a href="/" css={LinkTextStyle}>
        BL
      </a>
    </div>
  );
};
