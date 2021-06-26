import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { Button } from 'components/Button';

interface ContainerProps {
  viewModal: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100%;

  top: 0;
  left: 0;

  transition: background-color 0.4s;
  ${(props) =>
    props.viewModal
      ? css`
          background: rgba(0, 0, 0, 0.4);
          z-index: 4;
        `
      : css`
          background: none;
          z-index: -20;
        `}

  .content {
    position: absolute;
    display: flex;
    flex-direction: column;

    width: 36.875rem;
    height: 22.5rem;

    padding: 12px;

    transition: 0.4s;

    background: var(--white);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);

    border-radius: 0.875rem;

    .heading {
      position: relative;
      display: flex;
      margin-left: auto;
      justify-content: center;
      align-items: center;
      width: 100%;

      h3 {
        font-family: 'Poppins', sans-serif;
        font-weight: 800;
        font-size: 24px;
        color: #fff;
      }

      svg {
        position: absolute;
        top: 0;
        right: 0;
        color: #eb4034;
        transition: 0.4s;
        &:hover {
          color: ${shade(0.4, '#eb4034')};
          cursor: pointer;
        }
      }
    }

    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      padding: 0 8px;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.5);

      text-align: center;

      span {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 1.25rem;
      }

      > p + p {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 1rem;
      }
    }

    .button-container {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8.25rem;
  height: 3.125rem;
`;
