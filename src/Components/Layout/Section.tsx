/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/core';

interface Props {
  title?: string;
  id?: string;
}

export const Section: FC<Props> = ({ children, title, id }) => {
  return (
    <div id={id}>
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
        <span>{title}</span>
        <div
          css={css`
            padding: 5vh 5vw;
            display: flex;
            flex-flow: column wrap;
            justify-content: center;
            align-items: center;
          `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
