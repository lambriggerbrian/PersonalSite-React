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
}

interface Props {
  links: LinkData[];
  type?: 'slideDown' | 'bar';
  hide?: Boolean;
}

export const Navigation: FC<Props> = ({ links, type = 'slideDown', hide }) => {
  return type === 'bar' ? (
    <BarNav links={links} hide={hide ?? undefined} />
  ) : (
    <SlideDownNav links={links} hide={hide ?? undefined} />
  );
};

const SlideDownNav: FC<Props> = ({ links, hide = true }) => {
  return (
    <nav css={DropdownMenu} style={{ display: hide ? 'none' : 'flex' }}>
      <div
        key="searchbox"
        css={css`
          align-items: center;
          ${DropdownElement}
        `}
      >
        <span>SearchBox</span>
      </div>
      {links.map((item: LinkData, index: number) => (
        <div key={index}>
          <AnchorLink href={item.url} css={DropdownElement}>
            {item.short_name.toUpperCase()}
          </AnchorLink>
        </div>
      ))}
    </nav>
  );
};

const BarNav: FC<Props> = ({ links, hide = false }) => {
  return <div></div>;
};

const DropdownMenu = css`
  background-color: #ffffff;
  position: absolute;
  left: auto;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const DropdownElement = css`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: stretch;
  box-shadow: 2px 2px #888888;
  text-decoration: none;
`;
