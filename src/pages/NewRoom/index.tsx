import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

// import { useAuth } from 'hooks/auth';

import ilustration from 'assets/images/illustration.svg';
import logo from 'assets/images/logo.svg';

import { Button } from 'components/button';

import { Container, MainContent } from './styles';

const NewRoom = (): ReactElement<any, any> | null => {
  // const { user } = useAuth();

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
          <form action="">
            <input type="text" placeholder="Nome da sala" />
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
