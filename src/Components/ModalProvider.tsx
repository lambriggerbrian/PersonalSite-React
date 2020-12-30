import React, { FC } from 'react';
import { ModalWindow } from './ModalWindow';

export interface LinkData {
  text: string;
  link: string;
}

export type ModalContextType = {
  show: boolean;
  toggleModal: () => void;
  setModalData: (data: React.ReactNode) => void;
};

const ModalContext = React.createContext<ModalContextType>({
  show: false,
  toggleModal: () => null,
  setModalData: (data: React.ReactNode) => null,
});

export const ModalProvider: FC = ({ children }) => {
  const [show, setShow] = React.useState(false);
  const [modal, setModal] = React.useState<React.ReactNode>();

  const toggleModal = () => setShow(!show);
  const setModalData = (data: React.ReactNode) => setModal(data);

  return (
    <ModalContext.Provider value={{ show, toggleModal, setModalData }}>
      <ModalWindow show={show}>{modal}</ModalWindow>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const { show, toggleModal, setModalData } = React.useContext(ModalContext);
  return { show, toggleModal, setModalData };
};
