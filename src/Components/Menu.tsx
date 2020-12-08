/** @jsxImportSource @emotion/react */
import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import { MenuIcon } from './Icons';
import { useViewport } from './Responsive';
import { LinkTextStyle } from '../Styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface LinkData {
  name: string;
  short_name: string;
  description?: string;
  url: string;
  icons?: { src: string; sizes: string }[];
  offset?: string;
}

interface Props {
  links: LinkData[];
}

const DropdownMenu = css`
  background-color: #ffffff;
  position: absolute;
  left: auto;
  right: 0;
  width: 40vw;
  height: 25vh;
  display: flex;
  flex-flow: column nowrap;
`;

const DropdownElement = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  box-shadow: 2px 2px #888888;
  text-decoration: none;
`;

export const Menu: FC<Props> = ({ links }) => {
  const { useMobile } = useViewport();
  return <MenuMobileComponent links={links} />;
  // return useMobile() ? (
  //   <MobileComponent links={links} />
  // ) : (
  //   <DesktopComponent links={links} />
  // );
};

const MenuMobileComponent: FC<Props> = ({ links }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  return (
    <div
      onClick={toggleDropdown}
      onMouseEnter={() => setDropdownVisible(true)}
      css={css`
        min-width: 70px;
        width: 5vw;
        height: 100%;
        padding-right: 10px;
        cursor: pointer;
      `}
    >
      <MenuIcon />
      <nav
        style={{ display: dropdownVisible ? 'flex' : 'none' }}
        css={DropdownMenu}
        onMouseLeave={() => setDropdownVisible(false)}
      >
        <div
          key="searchbox"
          css={css`
            flex-grow: 2;
            align-items: center;
            ${DropdownElement}
          `}
        >
          <span>SearchBox</span>
        </div>
        {links.map((item: LinkData, index: number) => (
          <div key={index}>
            {/* <a href={item.url} css={DropdownElement}>
              {item.short_name.toUpperCase()}
            </a> */}
            <AnchorLink href={item.url} css={DropdownElement}>
              {item.short_name.toUpperCase()}
            </AnchorLink>
          </div>
        ))}
      </nav>
    </div>
  );
};

const DesktopComponent: FC<Props> = ({ links }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: stretch;
        padding: 10px;
        width: 70%;
      `}
    >
      {links.map((item: LinkData, index: number) => (
        <div
          key={index}
          css={css`
            background-color: darkblue;
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            width: 10vmin;
          `}
        >
          {/* <a href={item.url}>{item.short_name.substring(0, 1).toUpperCase()}</a> */}
          <a href={item.url} css={LinkTextStyle}>
            {item.short_name}
          </a>
        </div>
      ))}
    </div>
  );
};
