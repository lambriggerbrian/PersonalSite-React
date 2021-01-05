/** @jsxImportSource @emotion/react */
import React, { FC, useCallback, useEffect } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useModal } from '../Contexts/ModalProvider';

interface Props {
  show?: boolean;
}

export const ModalWindow: FC<Props> = ({ children, show = true }) => {
  const { toggleModal, setModalData } = useModal();
  const resetModal = () => {
    setModalData(null);
    toggleModal();
  };
  const handleBackgroundClick = (event: React.MouseEvent) => {
    resetModal();
  };
  const handleWindowClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event;
      switch (key) {
        case 'Esc':
          if (show) toggleModal();
          break;
        case 'Escape':
          if (show) toggleModal();
          break;
        default:
          return;
      }
    },
    [show, toggleModal],
  );
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
  return (
    <div css={show ? ModalDivCSS : Hide} onClick={handleBackgroundClick}>
      <ModalContentDiv onClick={handleWindowClick}>
        <div
          onClick={resetModal}
          css={css`
            align-self: flex-end;
            cursor: pointer;
            border-radius: 10px;
            padding: 5px;
            background-color: #222222;
          `}
        >
          <span>Close &times;</span>
        </div>
        {children}
      </ModalContentDiv>
    </div>
  );
};

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
  background-color: #666666;
  margin: 5vh auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  color: white;
`;
