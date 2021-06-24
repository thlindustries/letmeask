import { FormEvent, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from 'hooks/auth';
import { database } from 'services/firebase';

import ilustration from 'assets/images/illustration.svg';
import logo from 'assets/images/logo.svg';
import googleIconImg from 'assets/images/google-icon.svg';

import { Button } from 'components/Button';
import { Loading } from 'components/Loading';

import { toast } from 'react-toastify';
import { Container, MainContent, CreateRoomButton, Separator } from './styles';

const Home = (): any => {
  const [roomCode, setRoomCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { signInWithGoogle, user } = useAuth();

  const { push } = useHistory();

  const handleCreateRoom = async (): Promise<void> => {
    if (!user.name) {
      await signInWithGoogle();
      push('/room/new');
    }
    push('/room/new');
  };

  const handleJoinRoom = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      if (roomCode.trim() === '') return;

      setIsLoading(true);
      const roomRef = await database.ref(`rooms/${roomCode}`).get();
      setIsLoading(false);

      if (!roomRef.exists()) {
        toast.error('Room does not exists');
        setRoomCode('');
        return;
      }

      push(`/room/${roomCode}`);
    },
    [roomCode, push],
  );

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
          <CreateRoomButton
            onClick={handleCreateRoom}
            type="button"
            disabled={isLoading}
          >
            <img src={googleIconImg} alt="Google icon" />
            Crie sua sala com o Google
          </CreateRoomButton>
          <Separator>ou entre em uma sala</Separator>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
            />
            <Button
              id="joinRoomButton"
              type="submit"
              rainbow
              disabled={isLoading}
            >
              {isLoading ? <Loading /> : `Entrar na sala`}
            </Button>
          </form>
        </MainContent>
      </main>
    </Container>
  );
};

export default Home;
