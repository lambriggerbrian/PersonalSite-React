/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { LinkTextSpan } from './Styles';

interface Props {
  href: string;
  text?: string;
}

export const Link: FC<Props> = ({ href, text }) => {
  return (
    <>
      <a href={href}>
        <LinkTextSpan>{text}</LinkTextSpan>
      </a>
    </>
  );
};
