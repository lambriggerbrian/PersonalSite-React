/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/core';
import { ScrollArrowIcon } from './Icons';
import { CenterFlexRow, SlideUpDiv } from './Styles';
import { useWindowLocation } from '../Contexts/WindowLocationProvider';

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
        margin-top: 7vh;
        width: 100%;
        max-width: 100vw;
        min-height: 40px;
        height: 5vh;
        cursor: pointer;
        background: rgb(17, 15, 18);
        background: linear-gradient(
          0deg,
          rgba(17, 18, 18, 1) 53%,
          rgba(58, 58, 58, 0.5) 100%
        );
      `}
    >
      <CenterFlexRow
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        <ScrollArrowIcon />
      </CenterFlexRow>
    </SlideUpDiv>
  );
};
