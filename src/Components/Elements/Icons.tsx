/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/core';

const IconDivStyle = css`
  width: inherit;
  height: inherit;
  max-width: 100%;
  max-height: 100%;
  text-align: center;
`;

interface IconOptions {
  width?: string;
  height?: string;
}

interface IconProps {
  src: string;
  iconOptions: IconOptions;
}

interface Props {
  iconOptions?: IconOptions;
}

const handleOpts = (iconOptions?: IconOptions) => {
  return Object.assign(
    {
      width: undefined,
      height: undefined,
    },
    iconOptions,
  );
};

const Icon: FC<IconProps> = ({ src, iconOptions }) => {
  const { width, height } = iconOptions;
  const style = css`
    ${width ? 'width: ' + width : ''}
    ${height ? 'height' + height : ''}
  `;
  return (
    <div css={IconDivStyle}>
      <img src={src} alt="Menu Icon" css={style} />
    </div>
  );
};

export const MenuIcon: FC<Props> = ({ iconOptions }) => {
  const icon = `${process.env.PUBLIC_URL + 'icons8-menu-96.png'}`;
  const opts = handleOpts(iconOptions);
  return <Icon src={icon} iconOptions={opts} />;
};

export const ScrollArrowIcon: FC<Props> = ({ iconOptions }) => {
  const icon = `${process.env.PUBLIC_URL + 'icons8-sort-up-96.png'}`;
  const opts = handleOpts(iconOptions);
  return <Icon src={icon} iconOptions={opts} />;
};

export const LambLogoIcon: FC<Props> = ({ iconOptions }) => {
  const icon = `${process.env.PUBLIC_URL + 'icons8-lamb-96.png'}`;
  const opts = handleOpts(iconOptions);
  return <Icon src={icon} iconOptions={opts} />;
};

export const GithubIcon: FC<Props> = ({ iconOptions }) => {
  const icon = `${process.env.PUBLIC_URL + 'icons8-github-96.png'}`;
  const opts = handleOpts(iconOptions);
  return <Icon src={icon} iconOptions={opts} />;
};

export const EmailIcon: FC<Props> = ({ iconOptions }) => {
  const icon = `${process.env.PUBLIC_URL + 'icons8-email-sign-96.png'}`;
  const opts = handleOpts(iconOptions);
  return <Icon src={icon} iconOptions={opts} />;
};

export const LinkedInIcon: FC<Props> = ({ iconOptions }) => {
  const icon = `${process.env.PUBLIC_URL + 'icons8-linkedin-circled-96.png'}`;
  const opts = handleOpts(iconOptions);
  return <Icon src={icon} iconOptions={opts} />;
};
