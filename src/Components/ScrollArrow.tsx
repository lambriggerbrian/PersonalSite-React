/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/core';
import { ScrollArrowIcon } from './Icons';
import { SlideUpDiv } from '../Styles';
import { useWindowLocation } from './WindowLocation';

export const ScrollArrow = () => {
  const { yOffsetBreak } = useWindowLocation();
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return !yOffsetBreak ? (
    <div></div>
  ) : (
    <SlideUpDiv
      onClick={scrollTop}
      css={css`
        position: sticky;
        bottom: 0;
        margin-top: 10vh;
        background-color: white;
        width: 100%;
        max-width: 100vw;
        min-height: 40px;
        height: 7vh;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        <ScrollArrowIcon />
      </div>
    </SlideUpDiv>
  );
};
