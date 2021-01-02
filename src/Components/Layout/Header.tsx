/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/core';
import { CenterFlexRow, LeftFlexRow, RightFlexRow } from '../Elements/Styles';
import { SocialLinks } from '../Elements/SocialLinks';
import { LambLogoIcon } from '../Elements/Icons';

const HeaderStyle = css`
  /** For Mobile */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 9vh;
  z-index: 666;
  background: rgb(18, 18, 18);
  background: linear-gradient(
    180deg,
    rgba(18, 18, 18, 1) 53%,
    rgba(58, 58, 58, 0.5) 100%
  );

  /** For Desktop*/
  @media (min-width: 768px) {
    height: 7vh;
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
  z-index: 667;

  /** For Desktop */
  @media (min-width: 768px) {
    left: 10px;
    right: 10px;
  }
`;

export const Header: FC = () => {
  return (
    <div id="Header" css={HeaderStyle}>
      <div css={DivStyle}>
        <LeftFlexRow id="HeaderLeft">
          <CenterFlexRow id="LogoDiv" style={{ height: '100%' }}>
            <a href="/" style={{ height: '100%', zIndex: 2 }}>
              <LambLogoIcon />
            </a>
          </CenterFlexRow>
        </LeftFlexRow>
        <RightFlexRow id="HeaderRight">
          <div style={{ height: '100%' }}>
            <SocialLinks />
          </div>
        </RightFlexRow>
      </div>
    </div>
  );
};
