import { ConfirmAction } from 'components/Modals/ConfirmAction';
import { useModal } from 'hooks/modal';

import { AdminActions } from './adminActions';
import { DefaultActions } from './defaultActions';

import { Container } from './styles';

type Question = {
  id: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
};

type QuestionCardProps = {
  question: Question;
  isAdmin?: boolean;
  deleteQuestion?(questionId: string): void;
  highlightQuestion?(questionId: string): void;
  checkQeustionAsAnswered?(questionId: string): void;
  likeQuestion?(questionId: string, likedId: string | undefined): void;
};

export const QuestionCard = ({
  question,
  isAdmin = false,
  likeQuestion,
  highlightQuestion,
  checkQeustionAsAnswered,
  deleteQuestion,
}: QuestionCardProps): any => {
  const { modalState, toggleModal } = useModal();

  const toggleDelteQuestionModal = (): void => {
    const { confirmDeleteQuestion } = modalState;

    toggleModal('confirmDeleteQuestion', !confirmDeleteQuestion);
  };

  return (
    <>
      {deleteQuestion && (
        <ConfirmAction
          viewModal={modalState.confirmDeleteQuestion}
          message="Você vai deletar essa pergunta"
          onContinue={() => deleteQuestion(question.id)}
          closeModal={toggleDelteQuestionModal}
        />
      )}
      <Container
        isAnswered={question.isAnswered}
        isHighlighted={question.isHighlighted && !question.isAnswered}
      >
        <p>{question.content}</p>
        <footer>
          <div className="user-info">
            <img src={question.author.avatar} alt={question.author.name} />
            <span>{question.author.name}</span>
          </div>
          <div className="actions-container">
            {isAdmin
              ? deleteQuestion &&
                highlightQuestion &&
                checkQeustionAsAnswered && (
                  <AdminActions
                    isAnswered={question.isAnswered}
                    deleteQuestion={toggleDelteQuestionModal}
                    highlightQuestion={() => highlightQuestion(question.id)}
                    checkQeustionAsAnswered={() =>
                      checkQeustionAsAnswered(question.id)
                    }
                  />
                )
              : likeQuestion && (
                  <DefaultActions
                    isAnswered={question.isAnswered}
                    isLiked={!!question.likeId}
                    likeCount={question.likeCount}
                    likeQuestion={() =>
                      likeQuestion(question.id, question.likeId)
                    }
                  />
                )}
          </div>
        </footer>
      </Container>
    </>
  );
};
