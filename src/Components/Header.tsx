/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/core';
import Menu from './Menu';
import { useViewport } from './Responsive';
import manifest from '../manifest.json';
import '../App.css';
import { Logo } from './Logo';

export const HeaderStyle = css`
  background-color: #5d2b906b;
  position: fixed;
  box-sizing: border-box;
  top: 0;
  display: flex;
  justify-content: space-between;
`;

const DesktopStyle = css`
  width: 5%;
  height: 100%;
`;

const MobileStyle = css`
  width: 100%;
  height: 10%;
`;

const linkData = manifest.shortcuts;

export const SiteNameLink = css`
  color: #23a9f2;
  font-family: 'Segoe UI', 'Helvetica', 'sans-serif';
  font-weight: bold;
  font-size: 32px;
  text-decoration: none;
`;

export const Header = () => {
  const { useMobile } = useViewport();
  return (
    <div
      css={css`
        ${HeaderStyle}
        ${useMobile() ? MobileStyle : DesktopStyle}
      `}
    >
      <Logo />
      <Menu links={linkData} />
    </div>
  );
};
