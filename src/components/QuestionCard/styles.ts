import styled, { css } from 'styled-components';

interface RoleActionButtonProps {
  isLiked?: boolean;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 1.5rem;
  border-radius: 0.5rem;

  min-height: 8.75rem;

  background: var(--white-grayed-100);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

  margin-bottom: 1rem;

  p {
    color: var(--gray-600);
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;

    .user-info {
      display: flex;
      align-items: center;

      img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }

      span {
        margin-left: 0.5rem;
        color: var(--gray-400);
        font-size: 0.875rem;
      }
    }
  }

  .actions-container {
    position: absolute;
    bottom: 24px;
    right: 24px;

    display: flex;
    align-items: center;
  }

  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const RoleActionButton = styled.button<RoleActionButtonProps>`
  border: 0;
  background: transparent;

  transition: color 0.2s, filter 0.2s;

  &.like-button {
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
    color: var(--gray-400);
  }

  svg path {
    transition: fill 0.2s, stroke 0.2s;
  }

  ${(props) =>
    props.isLiked &&
    css`
      color: var(--purple);
      svg path {
        fill: var(--purple);
        stroke: var(--white);
      }
    `}

  span {
    margin-right: 0.5rem;

    color: var(--gray-400);

    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
  }

  &:hover {
    filter: brightness(0.2);
  }
`;
