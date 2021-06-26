import { Container, Content } from './styles';

interface ModalInterface {
  onClose(): void;
  reset?: boolean;
}

export const Modal: React.FC<ModalInterface> = ({
  children,
  onClose,
  reset = false,
}) => (
  <Container reset={reset}>
    <Content>{children}</Content>
  </Container>
);
