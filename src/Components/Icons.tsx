/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/core';
import { BiMenu } from 'react-icons/bi';
import { FaArrowCircleUp } from 'react-icons/fa';

export const MenuIcon = () => (
  <div
    css={css`
      height: inherit;
      width: inherit;
      min-width: 70px;
    `}
  >
    <BiMenu
      css={css`
        height: 100%;
        width: 100%;
      `}
      size="100%"
      color="white"
    />
  </div>
);

export const ScrollArrowIcon = () => (
  <div
    css={css`
      height: inherit;
      width: inherit;
      min-width: 40px;
    `}
  >
    <FaArrowCircleUp
      css={css`
        width: 100%;
        height: 100%;
      `}
      size="100%"
    />
  </div>
);
