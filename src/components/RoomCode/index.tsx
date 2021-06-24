import { toast } from 'react-toastify';

import copyImg from 'assets/images/copy.svg';

import { Container } from './styles';

type RoomCodeProps = {
  roomCode: string;
};

export const RoomCode = ({ roomCode = '' }: RoomCodeProps): any => {
  const copyRoomCodeToClipboard = (): void => {
    navigator.clipboard.writeText(roomCode);
    toast.success('Código da sala copiado');
  };

  return (
    <Container onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="copy img" />
      </div>
      <span>{`Sala #${roomCode}`}</span>
    </Container>
  );
};
