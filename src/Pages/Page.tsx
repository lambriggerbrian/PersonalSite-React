/** @jsxImportSource @emotion/react */
import { css } from '@emotion/core';
import React, { FC } from 'react';
import { Header } from '../Components/Header';
import { ScrollArrow } from '../Components/ScrollArrow';
import { useWindowLocation } from '../Components/WindowLocation';
import {
  CenterFlexCol,
  CenterFlexRow,
  LeftFlexCol,
  RightFlexCol,
} from '../Styles';

export const Page: FC = ({ children }) => {
  return (
    <div
      id="PageDiv"
      css={css`
        position: absolute;
        width: 100%;
        max-width: 100vw;
        height: 100%;
        background: linear-gradient(
          0deg,
          rgba(17, 15, 18, 1) 53%,
          rgba(21, 53, 82, 1) 100%
        );
      `}
    >
      <Header />
      <CenterFlexRow
        id="body"
        css={css`
          justify-content: space-between;
          padding-top: 10vh;
          padding-bottom: 10vh;
          width: 100%;
          max-width: 100vw;
        `}
      >
        {/* <LeftFlexCol id="leftColumn"></LeftFlexCol> */}
        <CenterFlexCol id="centerColumn"> {children}</CenterFlexCol>
        {/* <RightFlexCol id="rightColumn"></RightFlexCol> */}
      </CenterFlexRow>

      <ScrollArrow />
    </div>
  );
};
