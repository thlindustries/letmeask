import { createContext, useCallback, useState, useContext } from 'react';

interface ModalContextData {
  modalState: { [key: string]: boolean };
  toggleModal(modalId: string, state: boolean): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export const ModalProvider: React.FC = ({ children }) => {
  const [modalState, setModalState] = useState(
    {} as { [key: string]: boolean },
  );

  const toggleModal = useCallback(
    (modalId: string, state: boolean) => {
      let modalObject = modalState;
      if (modalObject[modalId]) {
        if (modalObject[modalId] === true) {
          modalObject[modalId] = false;
          document.body.classList.remove('overlayed');
        } else {
          modalObject[modalId] = true;
          document.body.classList.add('overlayed');
        }
      } else {
        modalObject = { ...modalObject, [modalId]: state };
        if (state) {
          document.body.classList.add('overlayed');
        }
      }

      // setModalState(modalObject);
      setModalState({ ...modalObject });
    },
    [modalState],
  );

  return (
    <ModalContext.Provider
      value={{
        modalState,
        toggleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  return context;
}
