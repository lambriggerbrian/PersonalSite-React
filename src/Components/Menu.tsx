import React, { FC, useState } from 'react';
import { Path } from 'typescript';
import { MenuIcon } from './Icons';

interface LinkData {
  name: string;
  short_name: string;
  description: string;
  url: string | Path;
  icons: { src: string; sizes: string }[];
}

interface Props {
  links: LinkData[];
}

export const Menu = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleBlur = () => setDropdownVisible(true);
  return (
    <div>
      <MenuIcon />
    </div>
  );
};

export const DropdownMenu: FC<Props> = ({ links }) => {
  return (
    <div>
      <ul>
        {links.map((item: LinkData, index: number) => (
          <li key={index} className="menu-item">
            <a href={item.url}>{item.short_name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Menu as default };
