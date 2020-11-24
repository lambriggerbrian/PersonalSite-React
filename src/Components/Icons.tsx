import React from 'react';
import styled from '@emotion/styled';
import menuIcon from '../menu.png';

const MenuIconStyled = styled.img`
  color: white;
  height: 100%;
`;

export const MenuIcon = () => <MenuIconStyled src={menuIcon} />;
