import { FormEvent, useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from 'components/Button';
import { Header } from 'components/Header';
import { QuestionCard } from 'components/QuestionCard';

import { useAuth } from 'hooks/auth';
import { toast } from 'react-toastify';
import { database } from 'services/firebase';
import { Loading } from 'components/Loading';

import { Container, MainContent, QuestionContainer } from './styles';

type Question = {
  id: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isAnswered: boolean;
  isHighlighted: boolean;
};

type FirebaseQuestions = Record<string, Question>;

interface Params {
  id: string;
}

const Room = (): any => {
  const [newQuestionContent, setNewQuestionContent] = useState('');
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  const params = useParams<Params>();
  const { user } = useAuth();

  const handleSendQuestion = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      if (newQuestionContent.trim() === '') {
        return;
      }
      if (!user.name) {
        toast.info('You need to login before ask questions');
        return;
      }
      const question = {
        content: newQuestionContent,
        author: {
          name: user.name,
          avatar: user.avatar,
        },
        isHighlighted: false,
        isAnswered: false,
      };

      setIsLoading(true);
      const response = await database
        .ref(`rooms/${params.id}/questions`)
        .push(question);
      setIsLoading(false);

      if (response) {
        setNewQuestionContent('');
        toast.success('Your question has been sent');
      }
    },
    [newQuestionContent, user, params],
  );

  useEffect(() => {
    const roomRef = database.ref(`rooms/${params.id}`);

    roomRef.on('value', (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(
        ([key, value]) => ({
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
        }),
      );

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    });
  }, [params.id]);

  return (
    <Container>
      <Header roomCode={params.id} />
      <MainContent>
        <div className="title">
          <h1>{title}</h1>
          {questions.length > 0 && (
            <span>
              {questions.length === 1
                ? `${questions.length} pergunta`
                : `${questions.length} perguntas`}
            </span>
          )}
        </div>
        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            value={newQuestionContent}
            onChange={(e) => setNewQuestionContent(e.target.value)}
          />
          <div className="form-footer">
            {!user.name ? (
              <span>
                Para enviar uma pergunta,{' '}
                <button type="button" disabled={isLoading}>
                  faça seu login
                </button>
              </span>
            ) : (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            )}
            <Button
              className="send-button"
              type="submit"
              disabled={!user.name || isLoading}
            >
              {isLoading ? <Loading /> : `Enviar pergunta`}
            </Button>
          </div>
        </form>
      </MainContent>
      <QuestionContainer>
        {questions &&
          questions.map((item) => (
            <QuestionCard key={item.id} question={item} />
          ))}
      </QuestionContainer>
    </Container>
  );
};

export default Room;
