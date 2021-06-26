import { FormEvent, useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from 'components/Button';
import { Header } from 'components/Header';
import { QuestionCard } from 'components/QuestionCard';

import { useAuth } from 'hooks/auth';
import { useRoom } from 'hooks/room';
import { toast } from 'react-toastify';
import { Loading } from 'components/Loading';

import { database } from 'services/firebase';
import { Container, MainContent, QuestionContainer } from './styles';

interface Params {
  id: string;
}

export const Room = (): any => {
  const [newQuestionContent, setNewQuestionContent] = useState('');

  const params = useParams<Params>();

  const { user } = useAuth();
  const { isLoading, questions, title, handleSetRoomId, sendQuestion } =
    useRoom();

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
        likes: {},
        likeId: '',
        likeCount: 0,
      };

      await sendQuestion(question);

      setNewQuestionContent('');
    },
    [newQuestionContent, user, sendQuestion],
  );

  const handleLikeQuestion = useCallback(
    async (questionId: string, likeId: string | undefined) => {
      if (likeId) {
        await database
          .ref(`rooms/${params.id}/questions/${questionId}/likes/${likeId}`)
          .remove();
      } else {
        await database
          .ref(`rooms/${params.id}/questions/${questionId}/likes`)
          .push({
            authorId: user.id,
          });
      }
    },
    [params.id, user.id],
  );

  useEffect(() => {
    handleSetRoomId(params.id);
  }, [params.id, handleSetRoomId]);

  return (
    <Container>
      <Header roomCode={params.id} />
      <MainContent>
        {title ? (
          <>
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
            <QuestionContainer>
              {questions &&
                questions.map((item) => (
                  <QuestionCard
                    key={item.id}
                    question={item}
                    likeQuestion={handleLikeQuestion}
                  />
                ))}
            </QuestionContainer>
          </>
        ) : (
          <div className="loading-container">
            <Loading />
          </div>
        )}
      </MainContent>
    </Container>
  );
};
