import deleteImg from 'assets/images/delete.svg';
import checkImg from 'assets/images/check.svg';
import answerImg from 'assets/images/answer.svg';

import { RoleActionButton } from './styles';

interface AdminActionsProps {
  isAnswered?: boolean;
  deleteQuestion(): void;
  highlightQuestion(): void;
  checkQeustionAsAnswered(): void;
}

export const AdminActions = ({
  isAnswered = false,
  deleteQuestion,
  checkQeustionAsAnswered,
  highlightQuestion,
}: AdminActionsProps): any => {
  return (
    <>
      {!isAnswered && (
        <>
          <RoleActionButton type="button" onClick={checkQeustionAsAnswered}>
            <img src={checkImg} alt="mark answer as answered" />
          </RoleActionButton>
          <RoleActionButton type="button" onClick={highlightQuestion}>
            <img src={answerImg} alt="highlight answer" />
          </RoleActionButton>
        </>
      )}
      <RoleActionButton type="button" onClick={deleteQuestion}>
        <img src={deleteImg} alt="delete question button" />
      </RoleActionButton>
    </>
  );
};
