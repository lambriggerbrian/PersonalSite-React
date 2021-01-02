/** @jsxImportSource @emotion/react */
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import { Header } from '../Components/Layout/Header';
import { ScrollArrow } from '../Components/Elements/ScrollArrow';
import {
  CenterFlexCol,
  CenterFlexRow,
  LeftFlexCol,
  RightFlexCol,
} from '../Components/Elements/Styles';

interface Props {
  leftSidebarContent?: React.ReactNode;
  rightSidebarContent?: React.ReactNode;
}

export const Page: FC<Props> = ({
  children,
  leftSidebarContent,
  rightSidebarContent,
}) => {
  return (
    <PageDiv id="PageDiv">
      <Header />
      <CenterFlexRow id="body" css={BodyCSS}>
        <LeftFlexCol id="LeftColumn" css={SidebarCSS}>
          {leftSidebarContent}
        </LeftFlexCol>
        <CenterFlexCol id="CenterColumn">{children}</CenterFlexCol>
        <RightFlexCol id="RightColumn" css={SidebarCSS}>
          {rightSidebarContent}
        </RightFlexCol>
      </CenterFlexRow>
      <ScrollArrow />
    </PageDiv>
  );
};

const SidebarCSS = css`
  min-width: 5vw;

  @media (min-width: 768px) {
    min-width: 10vw;
  }
`;

const BodyCSS = css`
  justify-content: space-between;
  padding-top: 5vh;
  padding-bottom: 10vh;
  width: 100%;
  max-width: 100vw;
`;

const PageDiv = styled.div`
  position: absolute;
  z-index: -666;
  width: 100%;
  height: 100%;
`;
