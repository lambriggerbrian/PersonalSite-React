/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useModal } from './ModalProvider';

interface Props {
  show?: boolean;
}

const ModalDivCSS = css`
  display: block;
  position: fixed;
  z-index: 669;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #000000;
  background-color: rgb(0, 0, 0, 0.4);
`;

const Hide = css`
  display: none;
`;

const ModalContentDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  color: black;
`;

export const ModalWindow: FC<Props> = ({ children, show = true }) => {
  const { toggleModal, setModalData } = useModal();
  const handleClick = () => {
    setModalData(null);
    toggleModal();
  };
  return (
    <div css={show ? ModalDivCSS : Hide} onClick={handleClick}>
      <ModalContentDiv>{children}</ModalContentDiv>
    </div>
  );
};
