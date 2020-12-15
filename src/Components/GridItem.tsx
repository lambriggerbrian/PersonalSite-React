/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/core';

interface Props {
  image?: string;
  alt?: string;
  title: string;
}

const GridItemStyle = css`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const GridItem: FC<Props> = ({ image, alt = '', title }) => {
  return (
    <div css={GridItemStyle}>
      {image && <img src={image} alt={alt} />}
      {title && <span>{title}</span>}
    </div>
  );
};
