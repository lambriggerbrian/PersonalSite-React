/** @jsxImportSource @emotion/react */
import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import '../App.css';
import {
  CenterFlexCol,
  CenterFlexRow,
  HeaderFont,
  LeftFlexCol,
  LeftFlexRow,
  RightFlexRow,
} from '../Styles';
import manifest from '../manifest.json';
import { SocialLinks } from './SocialLinks';
import { LambLogoIcon, MenuIcon } from './Icons';
import { Menu } from './Menu';

const HeaderStyle = css`
  /** For Mobile */
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  z-index: 0;

  /** For Desktop*/
  @media (min-width: 768px) {
  }
`;

const DivStyle = css`
  /** For Mobile */
  position: absolute;
  left: 10px;
  right: 10px;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: space-between;
  height: 100%;
  z-index: 1;

  /** For Desktop */
  @media (min-width: 768px) {
    left: 10px;
    right: 10px;
  }
`;

const linkData = manifest.shortcuts;

export const Header: FC = () => {
  const [hideNav, setHideNav] = useState(true);
  const toggleNav = () => setHideNav(!hideNav);
  return (
    <div id="Header" css={HeaderStyle}>
      <div css={DivStyle}>
        <LeftFlexRow id="HeaderLeft">
          <div
            onClick={toggleNav}
            style={{ height: '100%', cursor: 'pointer' }}
          >
            <MenuIcon />
          </div>
          <div
            css={css`
              display: none;
              padding-left: 10px;
              @media (min-width: 768px) {
                display: flex;
                flex-flow: column nowrap;
                justify-content: left;
                align-items: stretch;
              }
            `}
          >
            <a href="/" css={HeaderFont}>
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
          </div>
        </LeftFlexRow>
        <RightFlexRow id="HeaderRight">
          <div style={{ height: '100%' }}>
            <SocialLinks />
          </div>
        </RightFlexRow>
      </div>
      <CenterFlexRow id="LogoDiv" style={{ height: '100%' }}>
        <a href="/" style={{ height: '100%', zIndex: 2 }}>
          <LambLogoIcon />
        </a>
      </CenterFlexRow>
      <CenterFlexCol style={{ display: hideNav ? 'none' : 'block' }}>
        <Menu links={linkData} />
      </CenterFlexCol>
    </div>
  );
};
