import { Link } from 'react-router-dom';

import { RoomCode } from 'components/RoomCode';
import { Button } from 'components/Button';

import logo from 'assets/images/logo.svg';

import { Container, AdminHeaderActions } from './styles';

type HeaderProps = {
  roomCode: string;
  admin?: boolean;
  endRoom?(): void;
};

export const Header = ({ roomCode, admin, endRoom }: HeaderProps): any => {
  return (
    <Container>
      <div className="content">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {admin ? (
          <AdminHeaderActions>
            <RoomCode roomCode={roomCode} />
            <Button type="button" onClick={endRoom} isOutlined>
              Encerrar Sala
            </Button>
          </AdminHeaderActions>
        ) : (
          <RoomCode roomCode={roomCode} />
        )}
      </div>
    </Container>
  );
};
