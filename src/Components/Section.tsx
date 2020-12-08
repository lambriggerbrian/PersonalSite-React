/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/core';

interface Props {
  title?: string;
  id?: string;
}

export const Section: FC<Props> = ({ children, title, id }) => {
  return (
    <div id={'Section-' + id}>
      <div
        css={css`
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
          width: 100%;
          color: white;
        `}
      >
        <div id={id}></div>
        <div>
          <span>{title}</span>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
