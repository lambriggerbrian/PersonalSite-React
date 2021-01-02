/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/core';
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
  left: 0vw;
  display: flex;
  flex-flow: column nowrap;
  @media (min-width: 768px) {
    min-width: 10vw;
  }
`;

const DropdownElement = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  box-shadow: 2px 2px #888888;
  text-decoration: none;
`;

export const Menu: FC<Props> = ({ links }) => {
  return <MenuMobileComponent links={links} />;
  // return useMobile() ? (
  //   <MobileComponent links={links} />
  // ) : (
  //   <DesktopComponent links={links} />
  // );
};

const MenuMobileComponent: FC<Props> = ({ links }) => {
  return (
    <nav css={DropdownMenu}>
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
  );
};
