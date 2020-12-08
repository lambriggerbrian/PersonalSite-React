/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/core';
import { LinkTextStyle } from '../Styles';

export const Logo = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
        width: 10vmin;
        max-height: 100%;
        max-width: 100%;
      `}
    >
      <a
        href="/"
        css={css`
          font-size: 32px;
          ${LinkTextStyle}
        `}
      >
        BL
      </a>
    </div>
  );
};
