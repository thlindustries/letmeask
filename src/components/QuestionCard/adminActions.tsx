import deleteImg from 'assets/images/delete.svg';

import { RoleActionButton } from './styles';

interface AdminActionsProps {
  deleteQuestion(): void;
}

export const AdminActions = ({ deleteQuestion }: AdminActionsProps): any => {
  return (
    <RoleActionButton type="button" onClick={deleteQuestion}>
      <img src={deleteImg} alt="delete question button" />
    </RoleActionButton>
  );
};
