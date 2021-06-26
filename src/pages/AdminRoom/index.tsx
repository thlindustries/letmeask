import { useEffect, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { useRoom } from 'hooks/room';
import { useModal } from 'hooks/modal';
import { database } from 'services/firebase';

import { Loading } from 'components/Loading';
import { Header } from 'components/Header';
import { QuestionCard } from 'components/QuestionCard';

import { ConfirmAction } from 'components/Modals/ConfirmAction';

import { Container, MainContent, QuestionContainer } from './styles';

interface Params {
  id: string;
}

export const AdminRoom = (): any => {
  const params = useParams<Params>();
  const { push } = useHistory();

  const { questions, title, handleSetRoomId, endRoom } = useRoom();
  const { modalState, toggleModal } = useModal();

  const toggleEndRoomModal = (): void => {
    const { confirmCloseRoom } = modalState;

    toggleModal('confirmCloseRoom', !confirmCloseRoom);
  };

  const handleEndRoom = useCallback(async () => {
    await endRoom(params.id);
    push('/');
  }, [params.id, endRoom, push]);

  const handleDeleteQuestion = useCallback(
    async (questionId: string) => {
      await database.ref(`rooms/${params.id}/questions/${questionId}`).remove();
    },
    [params.id],
  );

  useEffect(() => {
    handleSetRoomId(params.id);
  }, [params.id, handleSetRoomId]);

  return (
    <>
      <ConfirmAction
        viewModal={modalState.confirmCloseRoom}
        message="Você vai encerrar esta sala"
        onContinue={handleEndRoom}
        closeModal={toggleEndRoomModal}
      />

      <Container>
        <Header roomCode={params.id} endRoom={toggleEndRoomModal} admin />
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

              <QuestionContainer>
                {questions &&
                  questions.map((item) => (
                    <QuestionCard
                      key={item.id}
                      question={item}
                      isAdmin
                      deleteQuestion={handleDeleteQuestion}
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
    </>
  );
};
