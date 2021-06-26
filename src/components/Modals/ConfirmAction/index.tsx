import { useCallback } from 'react';
import { FiXCircle } from 'react-icons/fi';

import { Container, StyledButton } from './styles';

interface ConfirmActionProps {
  viewModal: boolean;
  message: string;
  onContinue(): void | Promise<void>;
  closeModal(): void;
}

export const ConfirmAction = ({
  viewModal,
  message,
  onContinue,
  closeModal,
}: ConfirmActionProps): any => {
  const handleContinue = useCallback(() => {
    onContinue();
    closeModal();
  }, [onContinue, closeModal]);

  return (
    <Container viewModal={viewModal}>
      {viewModal && (
        <>
          <div className="content">
            <div className="heading">
              <FiXCircle onClick={closeModal} size={32} />
            </div>
            <div className="wrapper">
              <span>{message}</span>
              <br />
              <p>Deseja continuar?</p>
            </div>
            <div className="button-container">
              <StyledButton customStyle="danger" onClick={closeModal}>
                Cancelar
              </StyledButton>
              <StyledButton customStyle="success" onClick={handleContinue}>
                Continuar
              </StyledButton>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};
