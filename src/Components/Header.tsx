import React from 'react';
import styled from '@emotion/styled';
import { MenuIcon } from './Icons';
import menuIcon from '../menu.png';
import '../App.css';

export const HeaderDiv = styled.div`
  position: fixed;
  box-sizing: border-box;
  top: 0;
  display: flex;
  align-items: center;
  background-color: #282c34;
  justify-content: space-between;
  padding: 10px, 20px;
  width: 100%;
`;

export const SiteNameLink = styled.a`
  color: #00cafe;
  font-family: 'Segoe UI', 'Helvetica', 'sans-serif';
  font-weight: bold;
  font-size: 32px;
  text-decoration: none;
`;

export const Header = () => {
  return (
    <HeaderDiv>
      <div>
        <MenuIcon src={menuIcon} />
        <SiteNameLink href="/">Brian Lambrigger</SiteNameLink>
      </div>
    </HeaderDiv>
  );
};

export { Header as default };
