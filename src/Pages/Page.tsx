/** @jsxImportSource @emotion/react */
import { css } from '@emotion/core';
import React, { FC } from 'react';
import { Header } from '../Components/Header';
import { ScrollArrow } from '../Components/ScrollArrow';
import {
  CenterFlexCol,
  CenterFlexRow,
  LeftFlexCol,
  RightFlexCol,
} from '../Styles';

interface Props {
  leftSidebarContent?: React.ReactNode;
  rightSidebarContent?: React.ReactNode;
}

const SidebarStyle = css`
  min-width: 5vw;

  @media (min-width: 768px) {
    min-width: 10vw;
  }
`;

export const Page: FC<Props> = ({
  children,
  leftSidebarContent,
  rightSidebarContent,
}) => {
  return (
    <div
      id="PageDiv"
      css={css`
        position: absolute;
        z-index: -666;
        width: 100%;
        height: 100%;
      `}
    >
      <Header />
      <CenterFlexRow
        id="body"
        css={css`
          justify-content: space-between;
          padding-top: 5vh;
          padding-bottom: 10vh;
          width: 100%;
          max-width: 100vw;
        `}
      >
        <LeftFlexCol id="LeftColumn" css={SidebarStyle}>
          {leftSidebarContent}
        </LeftFlexCol>
        <CenterFlexCol id="CenterColumn">{children}</CenterFlexCol>
        <RightFlexCol id="RightColumn" css={SidebarStyle}>
          {rightSidebarContent}
        </RightFlexCol>
      </CenterFlexRow>

      <ScrollArrow />
    </div>
  );
};
