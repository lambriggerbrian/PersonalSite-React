/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/core';
import { EmailIcon, GithubIcon, LinkedInIcon } from './Icons';
import styled from '@emotion/styled';
import AnchorLink from 'react-anchor-link-smooth-scroll';

interface Props {
  vertical?: Boolean;
}

const VerticalDivStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

const HorizontalDivStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

const VerticalLinkDiv = css`
  width: inherit;
  max-width: 100%;
  max-height: 100%;
`;

const HorizontalLinkDiv = css`
  height: inherit;
  max-width: 100%;
  max-height: 100%;
`;

const Link = styled.a`
  width: 100%;
  height: 100%;
`;

export const SocialLinks: FC<Props> = ({ vertical = false }) => {
  const style = vertical ? VerticalLinkDiv : HorizontalLinkDiv;
  return (
    <div
      id="SocialLinks"
      css={vertical ? VerticalDivStyle : HorizontalDivStyle}
    >
      <div id="EmailLink" css={style}>
        <AnchorLink
          href="#contact"
          css={css`
            width: 100%;
            height: 100%;
          `}
        >
          <EmailIcon />
        </AnchorLink>
      </div>
      <div id="GithubLink" css={style}>
        <Link
          href="https://github.com/lambriggerbrian"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </Link>
      </div>
      <div id="LinkedInLink" css={style}>
        <Link
          href="https://www.linkedin.com/in/brian-lambrigger-81539810b/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </Link>
      </div>
    </div>
  );
};
