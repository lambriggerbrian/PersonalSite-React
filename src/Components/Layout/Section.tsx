/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import styled from '@emotion/styled';

interface Props {
  title?: string;
  id?: string;
}

export const Section: FC<Props> = ({ children, title, id }) => {
  return (
    <SectionDiv id={id}>
      <span>{title}</span>
      <ContentDiv>{children}</ContentDiv>
    </SectionDiv>
  );
};

const SectionDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10vh 0px;
  color: white;
`;

const ContentDiv = styled.div`
  padding: 5vh 5vw;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
