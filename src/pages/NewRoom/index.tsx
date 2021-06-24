import { ReactElement, FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from 'hooks/auth';

import ilustration from 'assets/images/illustration.svg';
import logo from 'assets/images/logo.svg';

import { Button } from 'components/Button';

import { database } from 'services/firebase';
import { Container, MainContent } from './styles';

const NewRoom = (): ReactElement<any, any> | null => {
  const [roomName, setRoomName] = useState('');

  const { user } = useAuth();

  const { push } = useHistory();

  const handleCreateRoom = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (roomName.trim() === '') {
      return;
    }
    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: roomName,
      authorId: user.id,
    });

    push(`/room/${firebaseRoom.key}`);
  };

  return (
    <Container>
      <aside>
        <img src={ilustration} alt="ilustratiton" />
        <strong>Crie salas de &amp; A ao-vivo</strong>
        <p>Tire dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <MainContent>
          <img src={logo} alt="Letmeask logo" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </MainContent>
      </main>
    </Container>
  );
};

export default NewRoom;
