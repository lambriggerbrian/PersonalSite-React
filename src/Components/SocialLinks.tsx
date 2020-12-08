/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  vertical?: Boolean;
}

const VerticalDivStyle = css`
  width: 100%;
  height: 30%;
`;

const HorizontalDivStyle = css`
  width: 30%;
  height: 100%;
`;

export const SocialLinks: FC<Props> = ({ vertical }) => {
  return (
    <div
      css={css`
        ${vertical ? VerticalDivStyle : HorizontalDivStyle}
      `}
    >
      <a href="https://github.com/lambriggerbrian">
        <FontAwesomeIcon
          icon={['fab', 'github-square']}
          color="white"
          size="2x"
        />
      </a>
    </div>
  );
};
