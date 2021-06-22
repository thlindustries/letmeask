import { useHistory } from 'react-router-dom';

import { useAuth } from 'hooks/auth';

import ilustration from 'assets/images/illustration.svg';
import logo from 'assets/images/logo.svg';
import googleIconImg from 'assets/images/google-icon.svg';

import { Button } from 'components/button';

import { Container, MainContent, CreateRoomButton, Separator } from './styles';

const Home = (): any => {
  const { signInWithGoogle, user } = useAuth();

  const { push } = useHistory();

  const handleCreateRoom = async (): Promise<void> => {
    if (!user.name) {
      await signInWithGoogle();
      push('/room/new');
    }
    push('/room/new');
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
          <CreateRoomButton onClick={handleCreateRoom} type="button">
            <img src={googleIconImg} alt="Google icon" />
            Crie sua sala com o Google
          </CreateRoomButton>
          <Separator>ou entre em uma sala</Separator>
          <form action="">
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit" rainbow>
              Entrar na sala
            </Button>
          </form>
        </MainContent>
      </main>
    </Container>
  );
};

export default Home;
