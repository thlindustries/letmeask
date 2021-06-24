import { Link } from 'react-router-dom';

import { RoomCode } from 'components/RoomCode';

import logo from 'assets/images/logo.svg';

import { Container } from './styles';

type HeaderProps = {
  roomCode: string;
};

export const Header = ({ roomCode }: HeaderProps): any => {
  return (
    <Container>
      <div className="content">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <RoomCode roomCode={roomCode} />
      </div>
    </Container>
  );
};
