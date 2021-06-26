import styled, { css } from 'styled-components';

interface ContainerProps {
  reset: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;

  ${(props) =>
    !props.reset &&
    css`
      display: flex;

      top: 0;
      right: 0;

      margin-top: 24%;
      margin-right: 14%;
      z-index: 4;
    `}

  .change-school-container {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;

    width: 400px;
    height: 400px;
    border: solid 1px red;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
