/** @jsxImportSource @emotion/react */
import React, { FC, useState } from 'react';
import { css } from '@emotion/core';
import { MenuIcon } from './Icons';
import { useViewport } from './Responsive';

interface LinkData {
  name: string;
  short_name: string;
  description?: string;
  url: string;
  icons?: { src: string; sizes: string }[];
}

interface Props {
  links: LinkData[];
}

const DropdownBody = css`
  background-color: #ffffff;
  position: absolute;
  width: 30%;
`;

const DropdownList = css`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`;

const DropdownListElement = css`
  width: 100%;
  box-shadow: 2px 2px #888888;
`;

export const Menu: FC<Props> = ({ links }) => {
  const { useMobile } = useViewport();
  return useMobile() ? (
    <MobileComponent links={links} />
  ) : (
    <DesktopComponent links={links} />
  );
};

const DesktopComponent: FC<Props> = ({ links }) => {
  return (
    <div>
      <ul></ul>
    </div>
  );
};

const MobileComponent: FC<Props> = ({ links }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  return (
    <div onClick={toggleDropdown} onMouseEnter={() => setDropdownVisible(true)}>
      <MenuIcon />
      {dropdownVisible && (
        <div css={DropdownBody} onMouseLeave={() => setDropdownVisible(false)}>
          <ul css={DropdownList}>
            {links.map((item: LinkData, index: number) => (
              <li key={index} css={DropdownListElement}>
                <a href={item.url}>{item.short_name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { Menu as default };
