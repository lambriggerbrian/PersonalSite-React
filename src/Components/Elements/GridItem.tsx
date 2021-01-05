/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useModal } from '../Contexts/ModalProvider';
import { ItemData } from '../../Data/ItemData';
import { CenterFlexCol, CenterFlexRow } from './Styles';
import { Link } from './Link';

interface Props {
  data: ItemData;
  alt?: string;
  styled?: string;
}

interface ContentProps {
  data: ItemData;
}

export const GridItem: FC<Props> = ({
  children,
  data,
  alt = '',
  styled = 'cover',
}) => {
  const { toggleModal, setModalData } = useModal();
  const setModal = (children: React.ReactNode) => {
    setModalData(children);
    toggleModal();
  };
  const ModalContent = (
    <GridItemModalContent data={data}>{children}</GridItemModalContent>
  );
  return (
    <div css={GridItemStyle} onClick={() => setModal(ModalContent)}>
      <img
        src={
          data.img_small
            ? data.img_small.src
            : process.env.PUBLIC_URL + 'images/gudetama.jpg'
        }
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
          <span>{data.title}</span>
        </div>
      </CardTextDiv>
    </div>
  );
};

const GridItemModalContent: FC<ContentProps> = ({ children, data }) => {
  return (
    <CenterFlexCol>
      <h1>{data.title}</h1>

      {data.img_large && (
        <img
          src={data.img_large.src}
          alt={data.img_large.alt}
          css={css`
            max-width: 300px;
            max-height: 300px;
            margin: 0px auto;
          `}
        />
      )}
      {data.role && <h2>Role: {data.role}</h2>}
      {data.links && (
        <CenterFlexRow>
          {data.links.map((link, index) => {
            if (index === data.links.length - 1)
              return (
                <Link key={'link' + index} href={link.href} text={link.text} />
              );
            else
              return (
                <React.Fragment key={'link' + index}>
                  <Link
                    key={'link' + index}
                    href={link.href}
                    text={link.text}
                  />
                  <span style={{ margin: '0px 1em' }}>|</span>
                </React.Fragment>
              );
          })}
        </CenterFlexRow>
      )}
      {data.summary && <p>{data.summary}</p>}
      {children}
    </CenterFlexCol>
  );
};

const GridItemStyle = css`
  position: relative;
  width: 256px;
  height: 256px;
  margin-bottom: 10px;
  background-color: rgb(128, 128, 128);
  z-index: 0;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

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
    background-color: rgba(69, 69, 69, 1);
    transition: 0.4s;
  }
`;
