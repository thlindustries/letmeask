import styled, { css } from 'styled-components';
import { rainbowBg } from 'styles/animations';

interface ContainerProps {
  isHovered?: boolean;
  isOutlined?: boolean;
  customStyle?: string;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3.125rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background: ${(props) =>
    !props.isHovered
      ? `var(--purple)`
      : `linear-gradient(
      124deg,
      #ff2400,
      #e81d1d,
      #e8b71d,
      #e3e81d,
      #1de840,
      #1ddde8,
      #2b1de8,
      #dd00f3,
      #dd00f3
    );`};
  color: var(--white);

  padding: 0 2rem;

  border: 1px solid transparent;

  ${(props) =>
    props.isOutlined &&
    css`
      border: 1px solid var(--purple);
      background: var(--white);
      color: var(--purple);
    `}

  ${(props) =>
    props.customStyle === 'danger' &&
    css`
      background: #f15057;
      color: #fff;
    `}

  ${(props) =>
    props.customStyle === 'success' &&
    css`
      background: #04b530;
      color: #fff;
    `}

  img {
    margin-right: 0.5rem;
  }

  animation: ${rainbowBg} 4s linear infinite;
  background-size: 1800% 1800%;
  transition: filter 0.2s, background-color 0.2s, color 0.2s;

  &:not(:disabled):hover {
    filter: brightness(0.8);
    color: var(--black);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
