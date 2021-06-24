import styled from 'styled-components';

export const Container = styled.header`
  padding: 1.5rem;
  border-bottom: 1px solid var(--white-grayed-200);

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1120px;
    margin: 0 auto;

    > img {
      max-height: 45px;
    }

    transition: opacity 0.2s;
    &:hover {
      opacity: 0.8;
    }
  }
`;
