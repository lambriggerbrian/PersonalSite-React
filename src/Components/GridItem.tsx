/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useModal } from './ModalProvider';

interface Props {
  title: string;
  image?: string;
  alt?: string;
  styled?: string;
}

const GridItemStyle = css`
  position: relative;
  width: 256px;
  height: 256px;
  margin-bottom: 10px;
  background: rgb(128, 128, 128);
  z-index: 0;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const GridItem: FC<Props> = ({
  children,
  image,
  alt = '',
  title,
  styled = 'cover',
}) => {
  const { toggleModal, setModalData } = useModal();
  const setModal = (children: React.ReactNode) => {
    setModalData(children);
    toggleModal();
  };
  return (
    <div css={GridItemStyle} onClick={() => setModal(children)}>
      <img
        src={image ? image : process.env.PUBLIC_URL + 'images/gudetama.jpg'}
        alt={alt}
        css={css`
          object-fit: ${styled};
          width: 100%;
          height: 100%;
          z-index: 1;
        `}
      />
      <CardTextDiv>
        <div>
          <span>{title}</span>
        </div>
      </CardTextDiv>
    </div>
  );
};

const CardTextDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 3;
  color: rgba(0, 0, 0, 0);

  :hover {
    color: white;
    background: rgba(69, 69, 69, 1);
    transition: 0.4s;
  }
`;
