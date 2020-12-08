/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/core';
import { Menu } from './Menu';
import manifest from '../manifest.json';
import '../App.css';
import {
  CenterFlexRow,
  HeaderFont,
  LeftFlexCol,
  LeftFlexRow,
  RightFlexRow,
} from '../Styles';

const HeaderStyle = css`
  /** For Mobile */
  background-color: #5d2b906b;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;

  /** For Desktop*/
  @media (min-width: 768px) {
  }
`;

const DivStyle = css`
  /** For Mobile */
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
  max-width: 100vw;
  height: 100%;

  /** For Desktop */
  @media (min-width: 768px) {
  }
`;

const linkData = manifest.shortcuts;

export const Header: FC = () => {
  return (
    <div id="Header" css={HeaderStyle}>
      <div css={DivStyle}>
        <LeftColumn />
        <CenterColumn />
        <RightColumn />
      </div>
    </div>
  );
};

const LeftColumn: FC = () => {
  return (
    <LeftFlexRow
      id="HeaderLeft"
      css={css`
        padding-left: 0px;
        @media (min-width: 768px) {
          padding-left: 10px;
        }
      `}
    >
      <div
        css={css`
          background-color: white;
          width: 70px;
          height: 100%;
        `}
      >
        Logo
      </div>
      <LeftFlexCol
        css={css`
          justify-content: center;
          padding-left: 10px;
        `}
      >
        <a
          href="/"
          css={css`
            ${HeaderFont}
            @media (min-width: 768px) {
              font-size: 2em;
            }
          `}
        >
          Brian Lambrigger
        </a>
        <span
          css={css`
            ${HeaderFont}
            margin-left: 7vw;
            color: #146794;
          `}
          // eslint-disable-next-line react/jsx-no-comment-textnodes
        >
          //Programmer & IT Professional
        </span>
      </LeftFlexCol>
    </LeftFlexRow>
  );
};

const CenterColumn: FC = () => {
  return <CenterFlexRow id="HeaderCenter"></CenterFlexRow>;
};

const RightColumn: FC = () => {
  return (
    <RightFlexRow id="HeaderRight">
      <Menu links={linkData} />
    </RightFlexRow>
  );
};
